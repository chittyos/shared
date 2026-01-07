import { z } from 'zod';

export const emailSchema = z.string().email();
export const passwordSchema = z.string().min(8);

export function validateEmail(email: string): boolean {
  return emailSchema.safeParse(email).success;
}