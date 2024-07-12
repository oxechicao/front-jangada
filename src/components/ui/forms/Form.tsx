import React from "react";

type Form = {
  children: React.ReactNode;
  onSubmit: () => void;
};
export const Form = ({ children, onSubmit }: Form) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};
