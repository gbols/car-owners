import { userRouter } from './userRoutes';
import config from '../config';


const routes = [
  userRouter
];

export default (app) => {
  routes.forEach(route => app.use(config.apiPrefix, route));
  return app;
};