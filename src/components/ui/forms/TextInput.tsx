import LabelInput, { LabelInputProps } from "@/components/ui/forms/LabelInput";
import { Input, InputProps } from "@/components/ui/forms/index";
import { dir } from "console";
import React, { HtmlHTMLAttributes, useId } from "react";

interface TextInput extends Partial<InputProps> {
  label: string | React.ReactNode;
  direction?: "row" | "column";
}

export const TextInput = ({ label, direction, ...props }: TextInput) => {
  return (
    <LabelInput label={label} direction={direction}>
      <Input {...props} />
    </LabelInput>
  );
};
