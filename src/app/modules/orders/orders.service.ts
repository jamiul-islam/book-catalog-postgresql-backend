/* eslint-disable @typescript-eslint/no-explicit-any */
import { Order } from '@prisma/client';
import prisma from '../../../prisma';

const insertIntoDB = async (data: Order): Promise<Order> => {
  const result = await prisma.order.create({
    data,
  });

  return result;
};

export const OrderService = {
  insertIntoDB,
};
