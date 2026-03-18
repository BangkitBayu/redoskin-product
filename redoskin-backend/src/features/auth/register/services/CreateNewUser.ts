import type { User } from '../../../../shared/baseSchemas/user.schema.ts';
import type { RegisterRepository } from '../repositories/register.repository.ts';

export class CreateNewUser {
  constructor(private registerRepository: RegisterRepository) {}
  async execute(data: User) {}
}
