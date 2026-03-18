import { RegisterRepository } from './repositories/register.repository.ts';
import { CreateNewUser } from './services/CreateNewUser.ts';
import { RegisterController } from './http/register.controller.ts';

const registerRepository = new RegisterRepository();
const createNewUser = new CreateNewUser(registerRepository);
const registerController = new RegisterController(createNewUser);

export default registerController;
