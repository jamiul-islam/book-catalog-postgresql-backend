/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Order } from '@prisma/client';
import prisma from '../../../prisma';

const insertIntoDB = async (data: Order): Promise<Order> => {
  console.log(data);
  const result = await prisma.order.create({
    // @ts-ignore
    data,
  });

  return result;
};

const getAllFromDB = async (): Promise<Order[]> => {
  const result = await prisma.order.findMany();
  return result;
};

export const OrderService = {
  insertIntoDB,
  getAllFromDB,
};
