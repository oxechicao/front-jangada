import React from "react";

type TableRow = {
  children: React.ReactNode;
  variant?: "normal" | "header" | "footer";
  className?: string;
};

export const Tr = ({ children, variant = "normal", className }: TableRow) => {
  const getClassVariant = (): string => {
    if (variant === "header") {
      return "font-bold border-b border-b-fuchsia-100 py-3";
    }

    if (variant === "footer") {
      return "font-bold border-t border-t-fuchsia-100 py-3";
    }

    return "py-1";
  };

  const classVariant = getClassVariant();

  return (
    <tr className={`hover:bg-neutral-700 ${classVariant} ${className}`}>
      {children}
    </tr>
  );
};
