import * as z from 'zod';

export const userSchema = z.object({
  fullname: z
    .string('Fullname must be filled')
    .regex(
      /^[A-Z][a-z]*( [A-Z][a-z]*)*$/,
      'Fullname consist alpha with first uppercase and whitespace',
    ), //Regex pattern to check full name format
  email: z.email('Email must be filled'),
  password: z
    .string('Password must be filled')
    .min(8, 'Password must have min length 8'),
  confirm_password: z.string('Confirm password must be filled').optional(),
});

export type User = z.infer<typeof userSchema>;
