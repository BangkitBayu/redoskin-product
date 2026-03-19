import type { User } from '../../../../shared/baseSchemas/user.schema.ts';
import { registerSchema } from '../../auth.schema.ts';
import { type Request, type Response } from 'express';
import { CreateNewUser } from '../services/CreateNewUser.ts';

export class RegisterController {
  constructor(private createNewUser: CreateNewUser) {}

  async handle(req: Request, res: Response) {
    const payload = registerSchema.safeParse(req.body);

    if (!payload.success) {
      return res.status(422).json({
        status: 'ERROR',
        message: 'Fields error',
        errors: payload.error.flatten(),
      });
    }

    if (payload.data.confirm_password !== payload.data.password) {
      return res.status(403).json({
        status: 'ERROR',
        message: 'Field error',
        errors: {
          confirm_password: ['Confirm password must match with password'],
        },
      });
    }

    const data: User = payload.data;

    try {
      const user = await this.createNewUser.execute(data);

      return res.status(201).json({
        status: 'SUCCESS',
        message: 'Register success',
        data: {
          user,
        },
      });
    } catch (error: unknown) {
      const errorMsg = error instanceof Error ? error.message : '';
      return res.status(409).json({
        status: 'ERROR',
        message: errorMsg,
      });
    }
  }
}
