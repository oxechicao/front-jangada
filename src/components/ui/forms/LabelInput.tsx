import { useId } from "react";

export interface LabelInputProps {
  label: string | React.ReactNode;
  direction?: "row" | "column";
  type?: "overlapping" | "stacked";
  children: React.ReactNode;
}

export default function LabelInput(props: LabelInputProps) {
  const { label, direction = "row", type = "overlapping", children } = props;

  const inputId = useId();
  const classDirection = direction === "column" ? "flex-col" : "items-center";
  return (
    <div className={`relative mt-3 ${classDirection}`}>
      <label
        className="absolute -top-2 left-2 bg-neutral-800 px-1 text-xs line"
        htmlFor={inputId}
      >
        {label}
      </label>
      {children}
    </div>
  );
}
