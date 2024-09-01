'use client';
import * as React from 'react';
import { editTodo } from '@/lib/action';
import { SubmitButton } from './ui/SubmitButton';
import { useFormState } from 'react-dom';

const initialState = { message: '' };

type AddTodoFormProps = {
  defaultValues: { title: string; description: string; id: number };
};

export const EditTodoForm = ({ defaultValues }: AddTodoFormProps) => {
  const [state, formAction] = useFormState(editTodo, initialState);

  return (
    <div>
      <h1 className="mb-6 text-center text-xl font-semibold text-pink-700">
        Add Todos
      </h1>

      <form action={formAction}>
        <input id="id" name="id" value={defaultValues.id} type="hidden" />
        <div className="mb-4">
          <input
            id="title"
            name="title"
            required
            defaultValue={defaultValues.title}
            type="text"
            placeholder="Title"
            className="block w-full rounded border bg-transparent px-5 py-[14px] text-base font-medium text-slate-950 transition-all duration-200 ease-linear placeholder:text-slate-950/25 focus:border-purple-950 focus:text-slate-950 focus:outline-0"
          />
        </div>
        <div className="mb-4">
          <input
            id="description"
            name="description"
            required
            defaultValue={defaultValues.description}
            type="text"
            placeholder="Description"
            className="block w-full rounded border bg-transparent px-5 py-[14px] text-base font-medium text-slate-950 transition-all duration-200 ease-linear placeholder:text-slate-950/25 focus:border-purple-950 focus:text-slate-950 focus:outline-0"
          />
        </div>
        <p className="text-center text-sm text-[#DF4B2D]">{state?.message}</p>
        <div className="mb-12">
          <SubmitButton pendingLabel="Updating...">Update Todo</SubmitButton>
        </div>
      </form>
    </div>
  );
};
