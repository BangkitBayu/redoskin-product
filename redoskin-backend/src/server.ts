import 'dotenv/config';
import express, { type Request, type Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import { spec } from './swaggerDocs.ts';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import expressRateLimit from 'express-rate-limit';

const app = express();
const port = process.env.PORT;

app.use(
  helmet({
    xPoweredBy: false,
  }),
);

// Configuration
app.use(
  express.json(),
  express.urlencoded({ extended: true }),
  cors({
    origin: `${process.env.APP_URL}:5173`,
    methods: 'GET,POST,PUT,PATCH,DELETE',
  }),
  helmet({
    xPoweredBy: false,
    xFrameOptions: { action: 'sameorigin' },
  }),
  expressRateLimit({
    windowMs: 5 * 60 * 1000, //5 menit
    limit: 10,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
      status: 'ERROR',
      message: 'Too many requests, try again in 5 minutes',
      error: 'TOO_MANY_REQUESTS',
      timestamp: new Date(),
    },
  }),
  morgan('dev'),
);

// Api docs route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

//Api fallback
app.use('/', (req: Request, res: Response) => {
  res.status(404).json({
    status: 'ERROR',
    message: `The requested API ${req.url} endpoint does not exist`,
    error: 'ROUTE_NOT_FOUND',
    timestamp: new Date(),
  });
});

app.listen(port, () => {
  console.log(`Server running on: ${process.env.APP_URL}${port}`);
});
