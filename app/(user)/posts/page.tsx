import Link from 'next/link'

export default function Posts() {
  return (
    <main className="grid main-height place-items-center">
      <div className="container flex flex-col py-20 space-y-8">
        <Link
          href="/posts/1"
          className="block pb-8 border-b border-gray-600 last-of-type:border-0 group"
        >
          <time className="block mb-4 text-base leading-6 text-gray-300">
            12 de março de 2021
          </time>
          <strong className="mb-1 text-2xl font-bold leading-8 transition-colors group-hover:text-yellow-500">
            Creating a Monorepo with Lerna & Yarn Workspaces
          </strong>
          <p className="leading-6 text-gray-200">
            In this guide, you will learn how to create a Monorepo to manage
            multiple packages with a shared build, test, and release process.
          </p>
        </Link>
        <Link
          href="/posts/1"
          className="block pb-8 border-b border-gray-600 last-of-type:border-0 group"
        >
          <time className="block mb-4 text-base leading-6 text-gray-300">
            12 de março de 2021
          </time>
          <strong className="mb-1 text-2xl font-bold leading-8 transition-colors group-hover:text-yellow-500">
            Creating a Monorepo with Lerna & Yarn Workspaces
          </strong>
          <p className="leading-6 text-gray-200">
            In this guide, you will learn how to create a Monorepo to manage
            multiple packages with a shared build, test, and release process.
          </p>
        </Link>
        <Link
          href="/posts/1"
          className="block pb-8 border-b border-gray-600 last-of-type:border-0 group"
        >
          <time className="block mb-4 text-base leading-6 text-gray-300">
            12 de março de 2021
          </time>
          <strong className="mb-1 text-2xl font-bold leading-8 transition-colors group-hover:text-yellow-500">
            Creating a Monorepo with Lerna & Yarn Workspaces
          </strong>
          <p className="leading-6 text-gray-200">
            In this guide, you will learn how to create a Monorepo to manage
            multiple packages with a shared build, test, and release process.
          </p>
        </Link>
      </div>
    </main>
  )
}
