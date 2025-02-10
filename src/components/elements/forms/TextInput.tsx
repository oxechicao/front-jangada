import { Input } from "@/components/ui/forms";
import { dir } from "console";
import { HtmlHTMLAttributes, useId } from "react";

interface TextInput extends Partial<HTMLInputElement> {
  label: string;
  direction?: "row" | "column";
}

export const TextInput = ({ label, direction, ...props }: TextInput) => {
  const inputId = useId();
  const classDirection = direction === "column" ? "flex-col" : "items-center";
  return (
    <div className={`flex gap-3 ${classDirection}`}>
      <label className="ml-3" htmlFor={inputId}>
        {label}
      </label>
      <Input id={inputId} {...props} />
    </div>
  );
};
