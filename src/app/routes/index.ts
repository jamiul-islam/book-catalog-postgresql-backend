import express from 'express';
import { BookRoutes } from '../modules/books/books.routes';
import { CategoryRoutes } from '../modules/category/category.routes';
import { OrdersRoutes } from '../modules/orders/orders.routes';
import { UserRoutes } from '../modules/users/users.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/',
    route: UserRoutes,
  },
  {
    path: '/categories',
    route: CategoryRoutes,
  },
  {
    path: '/books',
    route: BookRoutes,
  },
  {
    path: '/orders',
    route: OrdersRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
