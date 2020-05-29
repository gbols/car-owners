import express from 'express';
import cors from 'cors';
import routes from '../routes';

export default async ({ app }) => {
  app.use(cors());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.get('/', (req, res) => res.send('Hello World!'));
  routes(app);

  app.use((err, req, res, next) => {
    return res.status(500).send({
      errors: {
        message: err.message,
      }
    });
  });

  return app;
}