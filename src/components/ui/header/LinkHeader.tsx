import { A } from "@/components/ui/link";
import React from "react";

type LinkHeader = {
  href?: string;
  children: React.ReactNode;
};
export function LinkHeader({ href = "#", children }: LinkHeader) {
  return (
    <A className="text-white p-3" href={href}>
      {children}
    </A>
  );
}
