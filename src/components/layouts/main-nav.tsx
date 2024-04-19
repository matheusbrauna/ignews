'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function MainNav() {
  const pathname = usePathname()

  const routes = [
    {
      href: '/',
      label: 'Home',
      active: pathname === '/',
    },
    {
      href: '/posts',
      label: 'Posts',
      active: pathname === '/posts',
    },
  ]

  return (
    <div className="hidden flex-1 items-center gap-16 lg:flex">
      <Link href="/" className="hidden lg:block">
        <Icons.logo aria-hidden="true" />
        <span className="sr-only">Home</span>
      </Link>
      <nav className="flex items-center space-x-4 lg:space-x-6">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              'relative h-20 leading-[5rem] transition-colors hover:text-primary',
              route.active
                ? 'font-bold text-foreground before:absolute before:bottom-0 before:left-1/2 before:block before:h-1 before:w-[115%] before:-translate-x-1/2 before:rounded-tl-md before:rounded-tr-md before:bg-yellow-500 dark:text-accent-foreground'
                : 'text-muted-foreground',
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>
      <Button
        className="ml-auto h-12 rounded-full font-bold"
        variant="secondary"
      >
        <Icons.github className="mr-2 h-6 w-6 text-yellow-500" /> Sign in with
        GitHub
      </Button>
    </div>
  )
}
