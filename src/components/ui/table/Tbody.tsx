import React from "react";

type TableBody = {
  children: React.ReactNode;
};
export const Tbody = ({ children }: TableBody) => {
  return <tbody>{children}</tbody>;
};
