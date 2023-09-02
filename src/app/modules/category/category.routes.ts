import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CategoryController } from './category.controller';
import { CategoryValidation } from './category.validations';

const router = express.Router();

router.get('/', CategoryController.getAllFromDB);

router.get('/:id', CategoryController.getByIdFromDB);

router.post(
  '/create-category',
  validateRequest(CategoryValidation.create),
  CategoryController.insertIntoDB
);

router.patch(
  '/:id',
  validateRequest(CategoryValidation.update),
  CategoryController.updateIntoDB
);

router.delete('/:id', CategoryController.deleteFromDB);

export const CategoryRoutes = router;
