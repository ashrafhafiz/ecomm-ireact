import { z } from 'zod';

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
});

export type Task = z.infer<typeof taskSchema>;

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  username: z.string(),
  avatar: z.string(),
  phone: z.string().nullable(),
  address: z.string().nullable(),
  role: z.enum(['admin', 'seller', 'customer', 'user']),
  status: z.enum(['active', 'inactive']),
});

export type User = z.infer<typeof userSchema>;
