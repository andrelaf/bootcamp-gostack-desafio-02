import { Router } from 'express';
import authMiddlaware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.use(authMiddlaware);
routes.put('/users', authMiddlaware, UserController.update);
export default routes;
