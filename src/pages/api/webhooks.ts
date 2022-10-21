import { NextApiRequest, NextApiResponse, PageConfig } from 'next'
import { Readable } from 'stream'
import Stripe from 'stripe'
import { stripe } from '../../services/stripe'
import { saveSubscription } from './_lib/manageSubscription'

async function buffer(readable: Readable) {
  const chunks = []

  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
  }

  return Buffer.concat(chunks)
}

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
}

const relevantEvents = new Set([
  'checkout.session.completed',
  'customer.subscription.updated',
  'customer.subscription.deleted',
])

export default async function StripeWebHooks(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req

  if (method !== 'POST') {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method not allowed')

    return
  }

  const buf = await buffer(req)
  const secret = req.headers['stripe-signature']

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      buf,
      `${secret}`,
      `${process.env.STRIPE_WEBHOOK_SECRET}`
    )
  } catch (err) {
    return res.status(400).send(`Webhook error: ${err}`)
  }

  const { type } = event

  if (relevantEvents.has(type)) {
    try {
      switch (type) {
        case 'customer.subscription.updated':
        case 'customer.subscription.deleted':
          const subscription = event.data.object as Stripe.Subscription

          await saveSubscription(
            subscription.id,
            subscription.customer.toString()
          )

          break

        case 'checkout.session.completed':
          const checkoutSession = event.data.object as Stripe.Checkout.Session

          await saveSubscription(
            String(checkoutSession.subscription),
            String(checkoutSession.customer),
            true
          )

          break

        default:
          throw new Error('Unhandled event.')
      }
    } catch (err) {
      return res.status(400).json({ error: 'Webhook handler fail.' })
    }
  }

  res.status(200).json({
    received: true,
  })
}
