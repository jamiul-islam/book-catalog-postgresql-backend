import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './users.controller';
import { UserValidation } from './users.validations';

const router = express.Router();

router.get('/users', UserController.getAllFromDB);

router.get('/users/:id', UserController.getByIdFromDB);

router.post(
  '/auth/signup',
  validateRequest(UserValidation.create),
  UserController.insertIntoDB
);

router.patch(
  '/users/:id',
  validateRequest(UserValidation.update),
  UserController.updateIntoDB
);

router.delete('/users/:id', UserController.deleteFromDB);

export const UserRoutes = router;
