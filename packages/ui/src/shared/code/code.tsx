"use client";

import type { JSX, ReactNode } from "react";

interface CodeProps {
  children: ReactNode;
  className?: string;
}

const Code = ({ children, className }: CodeProps): JSX.Element => {
  return <code className={className}>{children}</code>;
};

export { type CodeProps, Code };
