import swaggerJSDocs from 'swagger-jsdoc';

const options: swaggerJSDocs.Options = {
  definition: {
    openApi: '3.0.0',
    info: {
      title: 'Redoskin Backend Api',
      version: '1.0.0',
      description: 'Api documentation for Redoskin app',
    },
    servers: [
      {
        url: ((process.env.APP_URL as string) + process.env.PORT) as string,
      },
    ],
  },
  apis: ['./src/routes/*.ts', './server.ts'],
};

export const spec = swaggerJSDocs(options);
