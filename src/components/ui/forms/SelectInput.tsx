import LabelInput from "@/components/ui/forms/LabelInput";
import Select, { SelectProps } from "@/components/ui/forms/Select";

interface SelectInputProps extends SelectProps {
  label: string | React.ReactNode;
  direction?: "row" | "column";
}

export default function SelectInput(props: SelectInputProps) {
  const { label, direction, name, optionsValues, className } = props;
  return (
    <LabelInput label={label} direction={direction}>
      <Select name={name} optionsValues={optionsValues} className={className} />
    </LabelInput>
  );
}
