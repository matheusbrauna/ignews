/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { GetStaticProps } from 'next'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/future/image'
import Head from 'next/head'
import { Button } from '../components/Button'
import { api } from '../services/api'
import { stripe } from '../services/stripe'
import { getStripeJs } from '../services/stripe-js'

interface IProduct {
  priceId: string
  amount: number
}

interface HomeProps {
  product: IProduct
}

export default function Home({ product }: HomeProps) {
  const { data: session } = useSession()

  async function handleSubscribe() {
    if (!session) {
      signIn('github')

      return
    }

    try {
      const res = await api.post('/subscribe')

      const { sessionId } = res.data

      const stripe = await getStripeJs()

      stripe?.redirectToCheckout({ sessionId })
    } catch (err) {
      alert(err)
    }
  }

  return (
    <>
      <Head>
        <title>Home | Ignews</title>
      </Head>

      <main>
        <div className="container flex flex-col items-center justify-between gap-10 pt-20 lg:pt-0 lg:gap-0 lg:main-height lg:flex-row">
          <div className="max-w-4xl">
            <span className="text-2xl font-bold">👏 Hey, welcome</span>

            <h1 className="mt-10 mb-6 font-black text-7xl">
              News about the <span className="text-blue-500">React</span> world
            </h1>

            <p className="text-2xl">Get access to all the publications</p>
            <p className="mb-10 text-2xl font-bold text-blue-500">
              for {product.amount} month
            </p>

            <Button type="button" onClick={handleSubscribe}>
              Subscribe now
            </Button>
          </div>

          <div className="relative w-[20.875rem] h-[32.5rem]">
            <Image
              src="/mulher.png"
              fill
              alt="Mulher"
              sizes="width: 20.875rem"
              priority
            />
          </div>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve(
    `${process.env.STRIPE_SUB_PRICE_ID}`
  )

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount! / 100),
  }

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24 * 30, // 30 days
  }
}
