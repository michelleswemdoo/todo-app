'use client';
import * as React from 'react';
import { EllipsisIcon } from '@/assets/icons/EllipsisIcon';
import { TodoMoreCard } from './TodoMoreCard';
import { Modal } from './ui/Modal';
import { Todo } from '@/types';
import { EditTodoForm } from './EditTodoForm';

type TodoDelete = { onDelete: (todoId: number) => void };
type TodoItemProps = Todo & TodoDelete;

export const TodoItem = ({
  id,
  description,
  title,
  onDelete,
}: TodoItemProps) => {
  const [showMore, setShowMore] = React.useState(false);
  const [editTodoModal, setEditTodoModal] = React.useState(false);

  return (
    <>
      <>
        <td className="px-6 py-3">
          <input type="checkbox" className="accent-slate-500" />
        </td>

        <td className="px-6 py-3">
          <p className="text-left text-sm font-semibold leading-6 tracking-wide">
            {title}
          </p>
        </td>

        <td className="px-6 py-3">
          <p className="text-left text-sm font-semibold leading-6 tracking-wide">
            {description}
          </p>
        </td>

        <td className="px-6 py-3">
          <button
            type="button"
            aria-label="open todo details"
            onClick={() => setShowMore(true)}
          >
            {EllipsisIcon}
          </button>
          <TodoMoreCard
            showMore={showMore}
            close={() => setShowMore(false)}
            onOpen={() => setEditTodoModal(true)}
            onDelete={onDelete}
            todoId={id!}
          />
        </td>
      </>

      <Modal showModal={editTodoModal} onClose={() => setEditTodoModal(false)}>
        <EditTodoForm defaultValues={{ title, description, id: id! }} />
      </Modal>
    </>
  );
};
