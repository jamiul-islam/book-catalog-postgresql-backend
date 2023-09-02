import { z } from 'zod';

const createValidation = z.object({
  body: z.object({
    userId: z.string({
      required_error: 'userId is required',
    }),
    orderedBooks: z.array(
      z.object({
        bookId: z.string({
          required_error: 'bookId is required',
        }),
        quantity: z.number({
          required_error: 'quantity is required',
        }),
      })
    ),
  }),
});

export const orderValidation = {
  create: createValidation,
};
