import type { User } from '../../../../shared/baseSchemas/user.schema.ts';
import type { RegisterRepository } from '../repositories/register.repository.ts';
import { hashPassword } from '../utils/passwordHasher.ts';

export class CreateNewUser {
  constructor(private registerRepository: RegisterRepository) {}
  async execute(data: User) {
    const existsUser = await this.registerRepository.findByEmail(data.email);
    if (existsUser) {
      throw new Error('Email already exists');
    }

    const hashedPassword = await hashPassword(data.password);

    return await this.registerRepository.create({
      fullname: data.fullname,
      email: data.email,
      password: hashedPassword,
    });
  }
}
