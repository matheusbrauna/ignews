'use client'

import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

type NavLinkProps = LinkProps & {
  children: ReactNode
}

export function NavLink({ children, href, ...rest }: NavLinkProps) {
  const pathname = usePathname()

  const isActive =
    pathname === href ||
    pathname === rest.as ||
    pathname?.startsWith(String(rest.as))

  console.log(pathname)

  return (
    <Link
      {...rest}
      href={href}
      className={clsx('relative text-base leading-[5rem]', {
        'text-gray-50 active-link': isActive,
        'text-gray-200': !isActive,
      })}
    >
      {children}
    </Link>
  )
}
