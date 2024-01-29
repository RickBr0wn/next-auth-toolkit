'use client'

import Link from 'next/link'
import { Button } from '../ui/button'

type BackButtonProps = {
  label: string
  href: string
}
export default function BackButton({ label, href }: BackButtonProps) {
  return (
    <Button variant="link" className="font-normal w-full" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  )
}

// Path: components/auth/back-button.tsx
// Created at: 21:58:31 - 17/01/2024
// Language: Typescript
// Framework: React/Next.js
