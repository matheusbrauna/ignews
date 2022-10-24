import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import Head from 'next/head'
import { RichText } from 'prismic-dom'
import { getPrismicClient } from '../../services/prismic'

interface PostProps {
  post: {
    slug: string
    title: string
    content: string
    updatedAt: string
  }
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>{post.title} | Ignews</title>
      </Head>

      <main>
        <div className="container">
          <article className="max-w-[720px] mt-20 mx-auto">
            <h1 className="text-6xl font-black">{post.title}</h1>
            <time className="block mt-6 text-base text-gray-300">
              {post.updatedAt}
            </time>

            <div
              className="mt-8 text-lg leading-5 text-gray-100 postContent"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const session = (await getSession({ req })) as any
  const slug = params?.slug

  if (!session?.activeSubscription) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const prismic = getPrismicClient(req)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const response = await prismic.getByUID<any>('post', String(slug), {})

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updatedAt: new Date(`${response.last_publication_date}`).toLocaleDateString(
      'pt-BR',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }
    ),
  }

  return {
    props: {
      post,
    },
  }
}
