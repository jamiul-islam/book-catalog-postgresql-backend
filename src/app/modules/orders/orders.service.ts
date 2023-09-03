/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Order } from '@prisma/client';
import prisma from '../../../prisma';
import { customerRequest } from './orders.interface';

const insertIntoDB = async (data: Order): Promise<Order> => {
  console.log(data);
  const result = await prisma.order.create({
    // @ts-ignore
    data,
  });

  return result;
};

const getAllFromDB = async (token: customerRequest): Promise<Order[]> => {
  // if the user is a customer, then only return the orders that belong to that customer
  if (token.role == 'customer') {
    const result = await prisma.order.findMany({
      where: {
        userId: token.userID,
      },
    });
    return result;
  } else {
    const result = await prisma.order.findMany();
    return result;
  }
};

export const OrderService = {
  insertIntoDB,
  getAllFromDB,
};
