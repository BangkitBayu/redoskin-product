import type { User } from '../../../../shared/baseSchemas/user.schema.ts';

export interface IRegisterRepository {
  create(data: User): Promise<object>;
  findByEmail(email: string): Promise<object>;
}

export class RegisterRepository implements IRegisterRepository {
  async create(data: User): Promise<object> {}
  async findByEmail(email: string): Promise<object> {}
}
