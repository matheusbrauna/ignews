'use client'

import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'

import { MainNav } from './main-nav'
import { MobileNav } from './mobile-nav'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-20 items-center">
        <MainNav />
        <div className="ml-auto flex w-full items-center justify-between lg:w-max">
          <MobileNav />
          <Button
            size="icon"
            className="rounded-full lg:hidden"
            variant="outline"
          >
            <Icons.github className="h-4 w-4 text-yellow-500" />
          </Button>
        </div>
      </div>
    </header>
  )
}
