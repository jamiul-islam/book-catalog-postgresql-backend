import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { OrderController } from './orders.controller';
import { orderValidation } from './orders.validations';

const router = express.Router();

router.post(
  '/create-order',
  validateRequest(orderValidation.create),
  OrderController.insertIntoDB
);

export const OrdersRoutes = router;
