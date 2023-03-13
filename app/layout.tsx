import './styles/globals.css'
import { ReactNode } from 'react'

import { Roboto } from 'next/font/google'
import { Header } from './components/Header'

export const metadata = {
  title: 'Home | Ignews',
}

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700', '900'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
