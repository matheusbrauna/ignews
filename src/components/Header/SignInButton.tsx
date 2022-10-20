import { BsGithub } from 'react-icons/bs'

interface SignInButtonProps {
  contextualClasses?: string
}

export function SignInButton({ contextualClasses = '' }: SignInButtonProps) {
  return (
    <button
      className={`flex font-bold items-center justify-center gap-4 h-12 px-4 bg-gray-700 rounded-full ${contextualClasses}`}
    >
      <BsGithub className="text-2xl text-yellow-500 " />
      Sing in with GitHub
    </button>
  )
}
