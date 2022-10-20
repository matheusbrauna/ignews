import { Logo } from '../Logo'
import { HeaderNav } from './HeaderNav'
import { SignInButton } from './SignInButton'

export function Header() {
  return (
    <header className="flex items-center h-20 border-b-[1px] border-gray-700">
      <div className="container flex items-center h-full gap-20">
        <Logo />

        <HeaderNav />

        <SignInButton contextualClasses="ml-auto" />
      </div>
    </header>
  )
}
