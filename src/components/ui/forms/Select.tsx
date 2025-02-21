export interface SelectProps extends Partial<HTMLSelectElement> {
  name: string;
  defaultValue?: string;
  optionsValues: { name: string; value: string; default?: boolean }[];
  className?: string;
}

export default function Select(props: SelectProps) {
  const { name, optionsValues, defaultValue, className = "" } = props;
  return (
    <select
      name={name}
      defaultValue={defaultValue}
      className={`bg-transparent pb-1 pt-2 text-center text-sm ${className}`}
    >
      {optionsValues.map((option, index) => (
        <option
          key={`${option.value}-${index}-${name}-option`}
          value={option.value}
        >
          {option.name}
        </option>
      ))}
    </select>
  );
}
