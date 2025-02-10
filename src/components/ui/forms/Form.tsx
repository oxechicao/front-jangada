import React from "react";

export interface FormInterface {
  direction?: "row" | "column";
  className?: string;
  children: React.ReactNode;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

export const Form = ({
  children,
  onSubmit,
  direction = "column",
  ...props
}: FormInterface) => {
  const classDirection = direction === "column" ? "flex-col" : "items-end";
  return (
    <form
      {...props}
      onSubmit={onSubmit}
      className={`flex gap-6 ${classDirection}`}
    >
      {children}
    </form>
  );
};
