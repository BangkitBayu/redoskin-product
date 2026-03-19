import type { User } from '../../../../shared/baseSchemas/user.schema.ts';
import { prisma } from '../../../../shared/infrastructure/database/prisma.ts';

export interface IRegisterRepository {
  create(data: User): Promise<object>;
  findByEmail(email: string): Promise<object | null>;
}

export class RegisterRepository implements IRegisterRepository {
  async create(data: User): Promise<object> {
    return await prisma.user.create({
      data: {
        fullname: data.fullname,
        email: data.email,
        password: data.password,
        created_at: new Date(),
      },
      select: { id: true, fullname: true, email: true },
    });
  }
  async findByEmail(email: string): Promise<object | null> {
    return await prisma.user.findUnique({
      where: { email },
      select: { email: true },
    });
  }
}
