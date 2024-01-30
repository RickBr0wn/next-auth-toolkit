import { CheckCircledIcon } from '@radix-ui/react-icons'

interface FormSuccessProps {
  message?: string
}
export default function FormSuccess({ message }: FormSuccessProps) {
  if (!message) return null

  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
      <CheckCircledIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  )
}

// Path: components/form-success.tsx
// Created at: 18:17:48 - 29/01/2024
// Language: Typescript
// Framework: React/Next.js
