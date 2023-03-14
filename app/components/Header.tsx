import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'
import { NavLink } from './NavLink'

export function Header() {
  return (
    <header className="border-b border-b-gray-600">
      <div className="container flex items-center w-full h-20 gap-20">
        <Link href="/" className="text-2xl font-bold">
          Ig<span className="text-blue-500">.</span>news
        </Link>
        <nav className="flex items-center w-full">
          <div className="grid grid-flow-col gap-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/posts">Posts</NavLink>
          </div>
          <button className="flex items-center justify-center w-6 h-6 gap-4 ml-auto font-bold rounded-full">
            <BsGithub className="w-full h-full text-2xl text-yellow-500" />
          </button>
        </nav>
      </div>
    </header>
  )
}
