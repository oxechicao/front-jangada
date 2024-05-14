import type { ComponentPropsWithoutRef } from "react";
import React from "react";

interface TableCell extends ComponentPropsWithoutRef<"td"> {
  children: React.ReactNode;
}

export const Td = ({ children, ...rest }: TableCell) => {
  return (
    <td className="text-center" {...rest}>
      {children}
    </td>
  );
};
