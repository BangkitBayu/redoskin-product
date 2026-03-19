import express, { type Request, type Response } from 'express';
import registerController from './register/index.ts';

const app = express();
const router = app.router;

router.post('/register', (req: Request, res: Response) => {
  return registerController.handle(req, res);
});

export default router;
