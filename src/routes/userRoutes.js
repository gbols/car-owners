import { Router } from 'express';
import { asyncMiddleware } from '../utils/wrapTryCatch';
import UserController from '../controller/userController';


const userRouter = Router();

userRouter.get('/user/:id', asyncMiddleware(UserController.getSpecificUser));

export { userRouter };
