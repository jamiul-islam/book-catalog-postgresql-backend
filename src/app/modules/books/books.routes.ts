import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BookController } from './books.controller';
import { BookValidation } from './books.validations';

const router = express.Router();

router.get('/', BookController.getAllFromDB);
router.get('/:id', BookController.getByIdFromDB);

router.post(
  '/create-book',
  validateRequest(BookValidation.create),
  BookController.insertIntoDB
);

router.patch('/:id', BookController.updateIntoDB);
router.delete('/:id', BookController.deleteFromDB);

export const BookRoutes = router;
