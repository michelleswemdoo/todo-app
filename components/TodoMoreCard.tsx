'use client';
import * as React from 'react';
import { Close } from '@/assets/icons/Close';

type TodoMoreCardProps = {
  showMore: boolean;
  close: () => void;
  onDelete: (todoId: number) => void;
  onOpen: () => void;
  todoId: number;
};

export const TodoMoreCard = ({
  showMore,
  close,
  onDelete,
  todoId,
  onOpen,
}: TodoMoreCardProps) => {
  const [isPending, startTransistion] = React.useTransition();

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this todo?'))
      startTransistion(() => onDelete(todoId));
  };
  return (
    <>
      {showMore && (
        <div className="absolute right-[4%] top-[70%] z-30 w-[154px] rounded-md bg-white px-1 py-2 shadow-[0px_5px_15px_0px_#00000033]">
          <button
            onClick={close}
            className="absolute -right-[10px] -top-[10px] inline-block"
          >
            {Close}
          </button>
          <ul>
            <li className="border-b border-solid border-[#E5EEFE] pb-[6px] text-[#383A47] last:border-b-0 last:pb-0 last:text-[#D30000]">
              <button
                onClick={onOpen}
                type="button"
                className="w-full px-2 py-1 text-left align-middle text-sm font-medium leading-[18.9px] hover:rounded-md hover:bg-[#E7F7EF]"
              >
                Edit
              </button>
            </li>

            <li className="border-b border-solid border-[#E5EEFE] pb-[6px] text-[#383A47] last:border-b-0 last:pb-0 last:text-[#D30000]">
              <button
                type="button"
                onClick={handleDelete}
                className="w-full px-2 py-1 text-left align-middle text-sm font-medium leading-[18.9px] hover:rounded-md hover:bg-[#E7F7EF]"
              >
                {/* This will not do much because useOpstmistic hook has already deleted it */}
                {!isPending ? (
                  <span>Delete</span>
                ) : (
                  <span className="mx-auto">
                    <div className="spinner-mini"></div>
                  </span>
                )}
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
