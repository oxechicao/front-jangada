import { HProps } from "@/components/ui/text/types";
import React from "react";

export function H3({ children, className }: HProps) {
  return <h3 className={`text-xl font-bold ${className}`}>{children}</h3>;
}
