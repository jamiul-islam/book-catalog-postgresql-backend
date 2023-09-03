import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { OrderController } from './orders.controller';
import { orderValidation } from './orders.validations';

const router = express.Router();

router.get('/', auth(ENUM_USER_ROLE.CUSTOMER), OrderController.getAllFromDB);

router.post(
  '/create-order',
  auth(ENUM_USER_ROLE.CUSTOMER),
  validateRequest(orderValidation.create),
  OrderController.insertIntoDB
);

export const OrdersRoutes = router;
