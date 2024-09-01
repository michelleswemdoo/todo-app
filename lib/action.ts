'use server';

import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { db } from './db';
import { todo } from './schema';
import { todoSchema } from './todo-schema';

export const getData = async () => {
  // return all do from db
  const todos = await db.select().from(todo);

  if (!todos) {
    throw new Error('Failed to fetch todos');
  }
  return todos;
};

export const addTodo = async (formData: FormData) => {
  const validatedFields = todoSchema.safeParse({
    title: formData.get('title')?.toString(),
    description: formData.get('description')?.toString(),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const validTodo = validatedFields.data;

  await db.insert(todo).values(validTodo);
  revalidatePath('/');
};

export const editTodo = async (prevState: any, formData: FormData) => {
  const id = Number(formData.get('id'));
  const title = formData.get('title')?.toString();
  const description = formData.get('description')?.toString();

  const validatedFields = todoSchema.safeParse({ id, title, description });

  if (!validatedFields.success) {
    return { message: 'Failed to update a todo' };
  }

  const validUpdatedTodo = validatedFields.data;

  // MUTATAION
  await db
    .update(todo)
    .set({
      title: validUpdatedTodo.title,
      description: validUpdatedTodo.description,
    })
    .where(eq(todo.id, Number(validUpdatedTodo.id)));

  // Revalidation
  revalidatePath('/');
};

export const deleteTodo = async (id: number) => {
  // MUTATAION
  await db.delete(todo).where(eq(todo.id, id));

  // Revalidation
  revalidatePath('/');
};
