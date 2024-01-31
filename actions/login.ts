'use server'

import * as z from 'zod'
import { LoginSchema } from '~/schemas'

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values)

  if (!validatedFields.success) return { error: 'Invalid fields!' }

  return { success: 'Email sent!' }
}

// Path: actions/login.ts
// Created at: 21:25:59 - 30/01/2024
// Language: Typescript
// Framework: React/Next.js
