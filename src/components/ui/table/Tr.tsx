import React from "react";

type TableRow = {
  children: React.ReactNode;
  variant?: "normal" | "header" | "footer";
};

export const Tr = (props: TableRow) => {
  const getClassVariant = (): string => {
    if (props.variant === "header") {
      return "font-bold border-b border-b-fuchsia-100 py-3";
    }

    if (props.variant === "footer") {
      return "font-bold border-t border-t-fuchsia-100 py-3";
    }

    return "py-1";
  };

  const classVariant = getClassVariant();

  return <tr>{props.children}</tr>;
};
