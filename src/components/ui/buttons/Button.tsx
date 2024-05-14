import React from "react";

type Button = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};
export function Button({ children, onClick, className }: Button) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 border rounded-xl ${className}`}
    >
      {children}
    </button>
  );
}
