import * as z from 'zod';

export const todoSchema = z.object({
  id: z
    .number({
      required_error: 'id is required',
      invalid_type_error: 'id must be a number',
    })
    .optional(),
  title: z.string().min(1, {
    message: 'Title is a required field',
  }),

  description: z.string().min(1, {
    message: 'Description is a required field',
  }),
});
