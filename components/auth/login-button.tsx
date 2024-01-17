'use client'

import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

type LoginButtonProps = {
  children: ReactNode
  mode?: 'modal' | 'redirect'
  asChild?: boolean
}

export default function LoginButton({
  children,
  mode = 'redirect',
  asChild,
}: LoginButtonProps) {
  const router = useRouter()

  const onClick = () => {
    router.push('auth/login')
  }

  if (mode === 'modal') {
    return <span className="text-white">TODO: Implement Modal</span>
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  )
}

// Path: components/auth/login-button.tsx
// Created at: 21:17:11 - 17/01/2024
// Language: Typescript
// Framework: React/Next.js
