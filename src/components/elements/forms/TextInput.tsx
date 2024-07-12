import { Input } from "@/components/ui/forms";
import { useId } from "react";

interface TextInput {
  label: string;
}

export const TextInput = ({ label }: TextInput) => {
  const inputId = useId();
  return (
    <div className="flex flex-col gap-3">
      <label className="ml-3" htmlFor={inputId}>
        {label}
      </label>
      <Input id={inputId} />
    </div>
  );
};
