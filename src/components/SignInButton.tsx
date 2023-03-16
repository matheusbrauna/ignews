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
      className={`flex items-center justify-center gap-4 p-2 ml-auto font-bold bg-gray-600 rounded-full sm:h-12 sm:w-max sm:px-4 ${contextualClasses}`}
    >
      <BsGithub className="w-6 h-6 text-2xl text-green-500" />
      <span className="hidden text-base sm:block">{session.user?.name}</span>
      <FiX className="text-2xl text-gray-300" />
    </button>
  ) : (
    <button
      onClick={() => signIn('github')}
      className={`flex items-center justify-center gap-4 p-2 ml-auto font-bold bg-gray-600 rounded-full sm:h-12 sm:w-max sm:px-4 ${contextualClasses}`}
    >
      <BsGithub className="text-2xl text-yellow-500" />
      <span>Sign in with GitHub</span>
    </button>
  )
}
