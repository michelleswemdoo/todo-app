import { useFormStatus } from 'react-dom';

type SubmitButtonProps = { children: string; pendingLabel: string };

export const SubmitButton = ({ children, pendingLabel }: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="w-full rounded-sm bg-pink-700 px-5 py-[14px] text-white disabled:bg-slate-400"
      type="submit"
    >
      {pending ? pendingLabel : children}
    </button>
  );
};
