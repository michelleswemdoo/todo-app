'use client';

import * as React from 'react';
import { Todo } from '@/types';
import { TodoItem } from './TodoItem';
import { deleteTodo } from '@/lib/action';

type TodosList = {
  todos: Array<Todo>;
};

export const Todos = ({ todos }: TodosList) => {
  const [optimisticTodos, optimisticDelete] = React.useOptimistic(
    todos,
    (curTodo, todoId) => {
      return curTodo.filter((todo) => todo.id !== todoId);
    },
  );

  const handleDelete = async (todoId: number) => {
    optimisticDelete(todoId);
    await deleteTodo(todoId);
  };

  return (
    <>
      {optimisticTodos.map((todo) => (
        <tr className="relative border-b border-solid" key={todo.id}>
          <TodoItem
            id={todo.id}
            title={todo.title}
            description={todo.description}
            onDelete={handleDelete}
          />
        </tr>
      ))}
    </>
  );
};
