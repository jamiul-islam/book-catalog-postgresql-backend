/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { ITokenRequest } from '../../../interfaces/common';
import prisma from '../../../prisma';

const insertIntoDB = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data,
  });
  return result;
};

const getAllFromDB = async (): Promise<User[]> => {
  const result = await prisma.user.findMany({
    include: {
      review_rating: false,
      order: false,
    },
  });

  return result;
};

const getByIdFromDB = async (id: string): Promise<User | null> => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      review_rating: false,
      order: false,
    },
  });

  return result;
};

const getByTokenFromDB = async (token: ITokenRequest): Promise<User | null> => {
  const result = await prisma.user.findUnique({
    where: {
      id: token.userID,
    },
  });

  return result;
};

const signInFromDB = async (data: Partial<User>): Promise<string> => {
  const result = await prisma.user.findUnique({
    where: {
      email: data.email,
      password: data.password,
    },
  });

  // check for error "user does not exist" if data is not in prisma user table
  if (!result) {
    throw new Error('User does not exist');
  }

  // return a jwt token using the user email and password
  const token = jwt.sign({ id: result?.id, name: result?.name }, 'secret', {
    expiresIn: '365d',
  });

  return token;
};

const updateIntoDB = async (id: string, data: Partial<User>): Promise<User> => {
  const result = await prisma.user.update({
    where: {
      id,
    },
    data,
  });

  return result;
};

const deleteFromDB = async (id: string): Promise<User> => {
  const result = await prisma.user.delete({
    where: {
      id,
    },
  });

  return result;
};

export const UserService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  getByTokenFromDB,
  signInFromDB,
  updateIntoDB,
  deleteFromDB,
};
