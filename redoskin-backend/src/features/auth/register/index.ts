import { RegisterRepository } from './repositories/register.repository.ts';
import { RegisterService } from './services/register.service.ts';
import { RegisterController } from './http/register.controller.ts';

const registerRepository = new RegisterRepository();
const createNewUser = new RegisterService(registerRepository);
const registerController = new RegisterController(createNewUser);

export default registerController;
