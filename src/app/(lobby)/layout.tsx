import { ReactNode } from 'react'

import { SiteHeader } from '@/components/layouts/site-header'

interface LobbyLayoutProps {
  children: ReactNode
}

export default async function LobbyLayout({ children }: LobbyLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      {/* <SiteFooter /> */}
    </div>
  )
}
