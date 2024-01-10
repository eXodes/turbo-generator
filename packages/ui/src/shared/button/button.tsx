"use client";

import { JSX, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

const Button = ({ appName, className, children }: ButtonProps): JSX.Element => {
  return (
    <button
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};

export { type ButtonProps, Button };
