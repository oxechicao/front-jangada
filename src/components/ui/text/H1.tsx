import { HProps } from "@/components/ui/text/types";
import React from "react";

export function H1({ children, className }: HProps) {
  return <h1 className={`text-4xl font-bold ${className}`}>{children}</h1>;
}
