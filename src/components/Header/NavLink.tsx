import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

type NavLinkProps = LinkProps & {
  children: string
}

export function NavLink({ children, href = '/', ...props }: NavLinkProps) {
  const { asPath } = useRouter()

  const isActive = asPath === href

  return (
    <Link href={href} {...props}>
      <a
        className={`relative flex items-center h-full font-bold text-gray-300 ${
          isActive && 'active-link text-gray-100'
        }`}
      >
        {children}
      </a>
    </Link>
  )
}
