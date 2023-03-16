import { GetStaticProps } from 'next'
import { signIn, useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { api } from '../lib/api'
import { stripe } from '../lib/stripe'
import { getStripeJs } from '../lib/stripe-js'

interface IProduct {
  priceId: string
  amount: number
}

interface HomeProps {
  product: IProduct
}

export default function Home({ product }: HomeProps) {
  const { data: session } = useSession() as any
  const { push } = useRouter()

  async function handleSubscribe() {
    if (!session) {
      signIn('github')

      return
    }

    if (session?.activeSubscription) {
      push('/posts')

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

      <main className="grid main-height place-items-center">
        <div className="container flex items-center justify-between">
          <div className="flex-[2]">
            <span className="block mb-10 text-xl font-bold leading-8 lg:text-2xl">
              👋🏻 Hey, welcome
            </span>
            <h1 className="font-black text-6xl lg:text-7xl leading-[4.5rem] mb-6">
              News about the <span className="text-blue-500">React</span> world
            </h1>
            <p className="text-xl leading-9 lg:text-2xl">
              Get access to all the publications
            </p>
            <p className="text-xl leading-9 text-blue-500 lg:text-2xl">
              for {product.amount} month
            </p>
            <button
              onClick={handleSubscribe}
              className="h-16 px-16 mt-10 text-xl font-bold text-gray-900 bg-yellow-500 rounded-full"
            >
              Subscribe now
            </button>
          </div>
          <div className="flex-1 hidden lg:block">
            <Image src="/hero.png" alt="" width={344} height={520} />
          </div>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve(
    `${process.env.STRIPE_SUB_PRICE_ID}`,
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
