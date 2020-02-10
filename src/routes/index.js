import { Router } from 'express';
import Validator from '../middlewares/Validator';
import UsersController from '../controllers/UsersController';

const router = Router();

router.get('/users/:usernameString/:language', Validator.paramsChecker, UsersController.fetchUsers);

export default router;
