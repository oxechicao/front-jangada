export interface InputProps extends Partial<HTMLInputElement> {
  name: string;
  defaultValue?: string;
  optionsValues: { name: string; value: string; default?: boolean }[];
  className?: string;
}

export const Input = ({ ...rest }) => {
  return (
    <input
      className="bg-transparent border rounded-sm border-neutral-300 px-3 pb-1 pt-2 text-sm outline-none w-full focus:border-fuchsia-400 hover:border-fuchsia-400"
      {...rest}
    />
  );
};
