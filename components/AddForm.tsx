'use client';
import { Post } from './Posts';
import { useState } from 'react';
import { Button } from './ui/Button';

type AddFormProps = { onAddPost: (postObj: Post) => void };

export const AddForm = ({ onAddPost }: AddFormProps) => {
  const [formValues, setFormValues] = useState({
    // name: '',
    title: '',
    body: '',
  });

  const [errors, setErrors] = useState<Partial<typeof formValues>>({});
  const isNotEmpty = (value: string | number) => value !== '';

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (): boolean => {
    const tempErrors: Partial<typeof formValues> = {};
    let isValid = true;

    // if (!isNotEmpty(formValues.name.trim())) {
    //   tempErrors.name = 'Name is a required field';
    //   isValid = false;
    // }
    if (!isNotEmpty(formValues.title.trim())) {
      tempErrors.title = 'Title is a required field';
      isValid = false;
    }
    if (!isNotEmpty(formValues.body.trim())) {
      tempErrors.body = 'Description is a required field';
      isValid = false;
    }
    setErrors(tempErrors);
    return isValid;
  };
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // const nameIsValid = isNotEmpty(formValues.name);
    // const titleIsValid = isNotEmpty(formValues.title);
    // const desIsValid = isNotEmpty(formValues.description);

    // if (!nameIsValid || !titleIsValid || !desIsValid) {
    //   return;
    // }
    if (!validate()) {
      return;
    }
    console.log(formValues);
    onAddPost(formValues);
  };
  return (
    <div>
      <h1 className="mb-6 text-center text-xl font-semibold text-pink-700">
        Add Form
      </h1>
      <form onSubmit={onSubmit}>
        {/* <div className="mb-4">
          <input
            onChange={onChange}
            type="text"
            placeholder="Name"
            name="name"
            className="block w-full rounded border border-black bg-transparent px-5 py-[14px] text-base font-medium text-slate-950 transition-all duration-200 ease-linear placeholder:text-slate-950/25 focus:border-purple-950 focus:text-slate-950 focus:outline-0"
          />
          {errors?.name && <span>{errors?.name}</span>}
        </div> */}
        <div className="mb-4">
          <input
            onChange={onChange}
            type="text"
            placeholder="Title"
            name="title"
            className="block w-full rounded border border-black bg-transparent px-5 py-[14px] text-base font-medium text-slate-950 transition-all duration-200 ease-linear placeholder:text-slate-950/25 focus:border-purple-950 focus:text-slate-950 focus:outline-0"
          />
          {errors?.title && <span>{errors?.title}</span>}
        </div>
        <div className="mb-4">
          <input
            onChange={onChange}
            type="text"
            placeholder="Description"
            name="body"
            className="block w-full rounded border border-black bg-transparent px-5 py-[14px] text-base font-medium text-slate-950 transition-all duration-200 ease-linear placeholder:text-slate-950/25 focus:border-purple-950 focus:text-slate-950 focus:outline-0"
          />
          {errors?.body && <span>{errors?.body}</span>}
        </div>
        <div>
          <Button type="submit">Add button</Button>
        </div>
      </form>
    </div>
  );
};
