import React from "react";

export interface Button {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  type?: HTMLButtonElement["type"];
}

export function Button({
  children,
  onClick,
  className,
  type = "button",
}: Button) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-1 border rounded-xl ${className}`}
    >
      {children}
    </button>
  );
}
