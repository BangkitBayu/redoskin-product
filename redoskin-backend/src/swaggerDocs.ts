import swaggerJSDocs from 'swagger-jsdoc';
import path from 'path';

const options: swaggerJSDocs.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Redoskin Backend Api',
      version: '1.0.0',
      description: 'Api documentation for Redoskin app',
    },
    servers: [
      {
        url:
          (((process.env.APP_URL as string) + process.env.PORT) as string) +
          '/api/v1',
      },
    ],
  },
  apis: [
    path.join(process.cwd(), 'src/server.ts'),
    path.join(process.cwd(), 'src/features/**/*.ts'),
    path.join(process.cwd(), 'src/baseSchemas/*.ts'),
  ],
};

export const spec = swaggerJSDocs(options);
// console.log(JSON.stringify(spec, null, 2));
