import { z } from 'zod'

export const schema = z
  .object({
    name: z.string().min(2, 'Name is required!'),
    email: z.string().email('Invalid email!').min(5, 'Email is required!'),
    pass1: z.string().min(8, 'Password must contain at least 8 characters!'),
    pass2: z.string().min(8, 'Password must contain at least 8 characters!')
  })
  .refine((data) => data.pass1 === data.pass2, {
    message: 'The passwords do not match',
    path: ['pass2']
  })

export type FormValues = z.infer<typeof schema>
