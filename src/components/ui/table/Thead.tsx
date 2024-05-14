import React from "react";

type TableHeader = {
  children: React.ReactNode;
};

export const Thead = ({ children }: TableHeader) => {
  return <thead>{children}</thead>;
};
