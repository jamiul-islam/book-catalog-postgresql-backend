import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { BookController } from './books.controller';
import { BookValidation } from './books.validations';

const router = express.Router();

router.get('/', BookController.getAllFromDB);
router.get('/:id', BookController.getByIdFromDB);
router.get('/:categoryId/category', BookController.getByCategoryFromDB);

router.post(
  '/create-book',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(BookValidation.create),
  BookController.insertIntoDB
);

router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), BookController.updateIntoDB);
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), BookController.deleteFromDB);

export const BookRoutes = router;
