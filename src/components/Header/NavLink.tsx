import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

type NavLinkProps = LinkProps & {
  children: string
}

export function NavLink({ children, href, ...props }: NavLinkProps) {
  const { asPath } = useRouter()

  const isActive = asPath === href

  return (
    <Link href={href} {...props}>
      <a
        className={clsx('relative flex items-center h-full', {
          'active-link': isActive,
          'text-gray-300': !isActive,
        })}
      >
        {children}
      </a>
    </Link>
  )
}