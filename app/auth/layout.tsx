import { ReactNode } from 'react'

type AuthLayoutProps = {
  children: ReactNode
}
export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      {children}
    </div>
  )
}

// Path: app/auth/layout.tsx
// Created at: 21:25:03 - 17/01/2024
// Language: Typescript
// Framework: React/Next.js
