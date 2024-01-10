"use client";

import type { JSX, ReactNode } from "react";

interface CardProps {
  title: string;
  href: string;
  children: ReactNode;
  className?: string;
}

const Card = ({ title, href, children, className }: CardProps): JSX.Element => {
  return (
    <a
      className={className}
      href={`${href}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{children}</p>
    </a>
  );
};

export { type CardProps, Card };
