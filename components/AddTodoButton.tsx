'use client';

import * as React from 'react';
import { AddTodoForm } from './AddTodoFrom';
import { Button } from './ui/Button';
import { Modal } from './ui/Modal';

export const AddTodoButton = () => {
  const [addTodoModal, setAddTodoModal] = React.useState(false);

  return (
    <>
      <Modal showModal={addTodoModal} onClose={() => setAddTodoModal(false)}>
        <AddTodoForm onClose={() => setAddTodoModal(false)} />
      </Modal>
      <div className="py-4 text-center">
        <Button onClick={() => setAddTodoModal(true)} type="button">
          Add Todo
        </Button>
      </div>
    </>
  );
};
