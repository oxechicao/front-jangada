export const Input = ({ ...rest }) => {
  return (
    <input
      className="bg-transparent border-b focus:border-b-fuchsia-400 hover:border-b-fuchsia-400 border-b-neutral-300 px-3 py-1 outline-none w-full"
      {...rest}
    />
  );
};
