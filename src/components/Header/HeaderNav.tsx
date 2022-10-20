import { NavLink } from './NavLink'

export function HeaderNav() {
  return (
    <nav className="flex items-center h-full gap-8 ">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/posts">Posts</NavLink>
    </nav>
  )
}
