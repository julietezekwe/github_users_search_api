import { Router } from 'express';
import Validator from '../middlewares/Validator';
import UsersController from '../controllers/UsersController';

const router = Router();

router.get('/users/:usernameString/:languages', Validator.paramsChecker, UsersController.fetchUsersByLanguage);

export default router;
