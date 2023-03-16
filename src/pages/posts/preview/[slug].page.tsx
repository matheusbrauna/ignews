import { client } from '@/src/lib/sanityClient'
import { PortableText } from '@portabletext/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { ImageDefinition, TypedObject } from 'sanity'

interface PostPreviewProps {
  post: {
    _id: string
    title: string
    slug: {
      current: string
    }
    mainImage: ImageDefinition
    body: TypedObject[]
    publishedAt: string
  }
}

export default function PostPreview({ post }: PostPreviewProps) {
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
              {post.publishedAt}
            </time>
            <PortableText value={post.body} />
            <div className="p-8 text-xl font-bold text-center rounded-full bg-gray-850">
              Wanna continue reading?
              <Link href="/" className="inline-block ml-2 text-yellow-500">
                Subscribe now 🤗
              </Link>
            </div>
          </article>
        </div>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `*[_type == "post" && defined(slug.current)[]].slug.current`
  const paths = await client.fetch(query)

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`
  const post = await client.fetch(query)

  return {
    props: {
      post,
    },
    revalidate: 60 * 30, // 30 min
  }
}
