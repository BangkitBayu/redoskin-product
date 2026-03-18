import express from 'express';
import registerController from './register/index.ts';

const app = express();
const router = app.router;

router.post('/register', registerController.handle);

export default router;
