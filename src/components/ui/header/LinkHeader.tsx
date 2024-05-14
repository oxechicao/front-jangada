import React from "react";

type LinkHeader = {
  href?: string;
  children: React.ReactNode;
};
export function LinkHeader({ href = "#", children }: LinkHeader) {
  return (
    <a className="text-white p-3" href={href}>
      {children}
    </a>
  );
}
