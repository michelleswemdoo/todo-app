'use client';

import * as React from 'react';
import { addTodo } from '@/lib/action';
import { SubmitButton } from './ui/SubmitButton';

type AddTodoFormProps = { onClose: () => void };
export const AddTodoForm = ({ onClose }: AddTodoFormProps) => {
  const addUpdateTodo = async (formData: FormData) => {
    addTodo(formData)
      .then((res) => {
        if (!res?.errors) onClose();
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <h1 className="mb-6 text-center text-xl font-semibold text-pink-700">
        Add Todos
      </h1>
      <form action={addUpdateTodo}>
        <div className="mb-4">
          <input
            id="title"
            name="title"
            required
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
            type="text"
            placeholder="Description"
            className="block w-full rounded border bg-transparent px-5 py-[14px] text-base font-medium text-slate-950 transition-all duration-200 ease-linear placeholder:text-slate-950/25 focus:border-purple-950 focus:text-slate-950 focus:outline-0"
          />
        </div>
        {/* <p className="text-center text-sm text-[#DF4B2D]">{state?.message}</p> */}
        <div className="mb-12">
          <SubmitButton pendingLabel="Adding...">Add todo</SubmitButton>
        </div>
      </form>
    </div>
  );
};
