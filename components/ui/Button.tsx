import * as React from 'react';

type ButtonProps = {
  className?: string;
  children?: React.ReactNode;
};

export interface ButtonProp
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonProps {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProp>(
  ({ children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className="rounded-md bg-pink-700 px-6 py-2 text-sm font-medium text-white"
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
