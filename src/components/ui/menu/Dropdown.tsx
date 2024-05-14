type Dropdown = {
  ariaLabel: string;
  label: string;
};
export const Dropdown = ({ ariaLabel, label }: Dropdown) => {
  return (
    <nav
      aria-labelledby={ariaLabel}
      className="relative inline-block text-left"
    >
      {label}
    </nav>
  );
};
