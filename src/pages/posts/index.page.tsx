import { client } from '@/src/lib/sanityClient'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { ImageDefinition, TypedObject } from 'sanity'
import PortableText from 'react-portable-text'

interface IPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  mainImage: ImageDefinition
  body: TypedObject[]
  publishedAt: string
}

interface PostsProps {
  posts: IPost[]
}

export default function Posts({ posts }: PostsProps) {
  return (
    <main className="grid main-height">
      <div className="container flex flex-col items-start py-20 space-y-8 lg:max-w-5xl">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/posts/${post.slug.current}`}
            className="block pb-8 border-b border-gray-600 last-of-type:border-0 group"
          >
            <time className="block mb-4 text-sm leading-6 text-gray-300 lg:text-base"></time>
            <strong className="text-xl font-bold leading-8 transition-colors lg:text-2xl group-hover:text-yellow-500">
              {post.title}
            </strong>
            <PortableText content={post.body.slice(0, 2)} />
          </Link>
        ))}
      </div>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await client.fetch(`*[_type == "post"]`)

  return {
    props: {
      posts,
    },
  }
}
