import { client } from '@/src/lib/sanityClient'
import PortableText from 'react-portable-text'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import { ImageDefinition, TypedObject } from 'sanity'

interface PostProps {
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

export default function Post({ post }: PostProps) {
  return (
    <main className="grid main-height">
      <div className="container flex flex-col items-start py-20 space-y-8 lg:max-w-5xl">
        <section className="max-w-[720px] mt-20 mx-auto">
          <h1 className="text-6xl font-black">{post.title}</h1>
          <time className="block mt-6 text-base text-gray-300">
            {post.publishedAt}
          </time>
          <PortableText content={post.body} />
        </section>
      </div>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
}) => {
  const session = (await getSession({ req })) as any
  const slug = params?.slug
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`
  const post = await client.fetch(query)

  if (!session?.activeSubscription) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      post,
    },
  }
}
