import { HProps } from "@/components/ui/text/types";
import React from "react";

export function H2({ children, className }: HProps) {
  return <h2 className={`text-2xl font-bold ${className}`}>{children}</h2>;
}
