'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useMediaQuery } from '@/hooks/use-media-query'
import { cn } from '@/lib/utils'

export function MobileNav() {
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const [open, setOpen] = useState(false)

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

  if (isDesktop) return null

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="size-5 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <Icons.menu aria-hidden="true" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pl-1 pr-0 pt-9">
        <div className="w-full px-7">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setOpen(false)}
          >
            <Icons.logo aria-hidden="true" />
            <span className="sr-only">Home</span>
          </Link>
        </div>
        <nav className="mt-8 flex w-full flex-col space-y-4 px-7">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                route.active
                  ? 'text-black dark:text-white'
                  : 'text-muted-foreground',
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
