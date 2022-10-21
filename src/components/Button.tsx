import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="h-16 px-16 text-xl font-bold text-gray-900 bg-yellow-500 rounded-full"
      {...props}
    >
      {children}
    </button>
  )
}
