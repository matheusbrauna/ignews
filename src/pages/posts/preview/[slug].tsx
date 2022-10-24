import { GetStaticPaths, GetStaticProps } from 'next'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { RichText } from 'prismic-dom'
import { useEffect } from 'react'
import { getPrismicClient } from '../../../services/prismic'

interface PostPreviewProps {
  post: {
    slug: string
    title: string
    content: string
    updatedAt: string
  }
}

export default function PostPreview({ post }: PostPreviewProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: session } = useSession() as any
  const { push } = useRouter()

  useEffect(() => {
    if (session?.activeSubscription) {
      push(`/posts/${post.slug}`)
    }
  }, [post.slug, push, session])

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
              className="mt-8 text-lg leading-5 gradient"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="p-8 text-xl font-bold text-center rounded-full bg-gray-850">
              Wanna continue reading?
              <Link href="/">
                <a className="inline-block ml-2 text-yellow-500">
                  Subscribe now 🤗
                </a>
              </Link>
            </div>
          </article>
        </div>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug

  const prismic = getPrismicClient()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const response = await prismic.getByUID<any>('post', String(slug), {})

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content.splice(0, 3)),
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
    revalidate: 60 * 30, // 30 min
  }
}
