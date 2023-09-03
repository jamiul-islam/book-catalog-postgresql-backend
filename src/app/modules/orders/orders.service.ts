/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Order } from '@prisma/client';
import { ITokenRequest } from '../../../interfaces/common';
import prisma from '../../../prisma';

const insertIntoDB = async (data: Order): Promise<Order> => {
  console.log(data);
  const result = await prisma.order.create({
    // @ts-ignore
    data,
  });

  return result;
};

const getAllFromDB = async (token: ITokenRequest): Promise<Order[]> => {
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

const getByIdFromDB = async (
  id: string,
  token: ITokenRequest
): Promise<Order | null | undefined> => {
  // if the user is a customer, then only return the orders that belong to that customer
  if (token.role == 'admin') {
    const result = await prisma.order.findUnique({
      where: {
        id,
      },
    });
    return result;
  } else if (token.role == 'customer') {
    const result = await prisma.order.findUnique({
      where: {
        id,
        userId: token.userID,
      },
    });
    return result;
  }
};

export const OrderService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
};
