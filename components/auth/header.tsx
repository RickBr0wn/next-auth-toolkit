import { Poppins } from 'next/font/google'
import { cn } from '~/lib/utils'

const font = Poppins({ subsets: ['latin'], weight: ['600'] })

type HeaderProps = {
  label: string
}

export default function Header({ label }: HeaderProps) {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn('text-xl font-semibold', font.className)}>🔐 Auth</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  )
}

// Path: components/auth/header.tsx
// Created at: 21:35:37 - 17/01/2024
// Language: Typescript
// Framework: React/Next.js
