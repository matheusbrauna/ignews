import { BsGithub } from 'react-icons/bs'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/react'

interface SignInButtonProps {
  contextualClasses?: string
}

export function SignInButton({ contextualClasses = '' }: SignInButtonProps) {
  const { data: session } = useSession()

  console.log(session)

  return session ? (
    <button
      onClick={() => signOut()}
      className={`flex font-bold items-center justify-center gap-4 h-12 px-4 bg-gray-700 rounded-full ${contextualClasses}`}
    >
      <BsGithub className="text-2xl text-green-500 " />
      {session.user?.name}
      <FiX className="text-2xl text-gray-300" />
    </button>
  ) : (
    <button
      onClick={() => signIn('github')}
      className={`flex font-bold items-center justify-center gap-4 h-12 px-4 bg-gray-700 rounded-full ${contextualClasses}`}
    >
      <BsGithub className="text-2xl text-yellow-500 " />
      Sign in with GitHub
    </button>
  )
}
