import Link from 'next/link'
import { NavLink } from './NavLink'
import { SignInButton } from './SignInButton'

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 border-b border-b-gray-600">
      <div className="container flex items-center w-full h-20 gap-20">
        <Link href="/" className="text-2xl font-bold">
          Ig<span className="text-blue-500">.</span>news
        </Link>
        <nav className="flex items-center w-full h-full">
          <div className="grid grid-flow-col gap-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/posts">Posts</NavLink>
          </div>
          <SignInButton />
        </nav>
      </div>
    </header>
  )
}
