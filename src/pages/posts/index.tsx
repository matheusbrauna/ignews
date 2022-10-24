/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'
import { getPrismicClient } from '../../services/prismic'
import Link from 'next/link'

type Post = {
  slug: string
  title: string
  excerpt: string
  updatedAt: string
}

interface PostsProps {
  posts: Post[]
}

export default function Posts({ posts }: PostsProps) {
  return (
    <>
      <Head>
        <title>Home | Ignews</title>
      </Head>

      <main>
        <div className="container">
          <div className="max-w-[720px] mt-20 mx-auto">
            {posts.map((post) => (
              <Link href={`/posts/${post.slug}`} key={post.slug}>
                <a className="transition-colors test hover:text-yellow-500">
                  <time className="flex items-center text-base text-gray-300">
                    {post.updatedAt}
                  </time>
                  <strong className="block mt-4 text-2xl leading-8">
                    {post.title}
                  </strong>
                  <p className="mt-2 leading-relaxed text-gray-300">
                    {post.excerpt}
                  </p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const response = await prismic.query<any>(
    [Prismic.Predicates.at('document.type', 'post')],
    {
      fetch: ['post.title', 'post.content'],
      pageSize: 100,
    }
  )

  const posts = response.results.map((post) => ({
    slug: post.uid,
    title: RichText.asText(post.data.title),
    excerpt:
      post.data.content.find(
        (content: { type: string }) => content.type === 'paragraph'
      )?.text ?? '',
    updatedAt: new Date(`${post.last_publication_date}`).toLocaleDateString(
      'pt-BR',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }
    ),
  }))

  return {
    props: {
      posts,
    },
  }
}
