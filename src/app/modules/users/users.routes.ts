import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './users.controller';
import { UserValidation } from './users.validations';

const router = express.Router();

router.get('/users', auth(ENUM_USER_ROLE.ADMIN), UserController.getAllFromDB);

router.get(
  '/users/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  UserController.getByIdFromDB
);

router.post(
  '/auth/signup',
  validateRequest(UserValidation.create),
  UserController.insertIntoDB
);

router.patch(
  '/users/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(UserValidation.update),
  UserController.updateIntoDB
);

router.delete(
  '/users/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  UserController.deleteFromDB
);

export const UserRoutes = router;
