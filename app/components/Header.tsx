import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'
import { NavLink } from './NavLink'

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 border-b border-b-gray-600">
      <div className="container flex items-center w-full h-20 gap-20">
        <Link href="/" className="text-2xl font-bold">
          Ig<span className="text-blue-500">.</span>news
        </Link>
        <nav className="flex items-center w-full">
          <div className="grid grid-flow-col gap-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/posts">Posts</NavLink>
          </div>
          <button className="flex items-center justify-center gap-4 p-2 ml-auto font-bold bg-gray-600 rounded-full sm:h-12 sm:w-max sm:px-4">
            <BsGithub className="w-6 h-6 text-2xl text-yellow-500" />
            <span className="hidden text-base sm:block">Matheus Braúna</span>
          </button>
        </nav>
      </div>
    </header>
  )
}
