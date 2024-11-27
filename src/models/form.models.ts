import { z } from 'zod'

/* Example schema */
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

/* Schema for Form Enterprise */
export const schemaFormEnterprise = z.object({
  firstname: z.string().min(2, 'First Name is required!'),
  lastname: z.string().min(2, 'Last Name is required!'),
  address: z.string().min(5, 'Address id required!'),
  email: z.string().email('Invalid email!').min(5, 'Email is required!'),
  phone: z.string().min(8, 'Invalid phone number!'),
  info: z.string().optional()
})

export type FormEnterpriseValues = z.infer<typeof schemaFormEnterprise>
