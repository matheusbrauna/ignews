import { GetStaticProps } from 'next';

import Head from 'next/head';
import Image from 'next/image';

import styles from './home.module.scss';
import Avatar from '../../public/images/avatar.svg';

import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';

interface HomeProps {
  product: {
    priceID: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, Welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get the access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceID={product.priceID} />
        </section>

        <Image src={Avatar} alt="Girl coding" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1LCk62KkiQHprDDVm96nQbWz');

  const product = {
    priceID: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 Hours
  };
};
