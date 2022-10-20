import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/">
      <a>
        <h1 className="text-3xl font-bold cursor-pointer">ig.news</h1>
      </a>
    </Link>
  )
}
