export function Card({
  children,
  className,
  size = "medium",
  type = "default",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "small" | "medium" | "large";
  type?: "default" | "outlined" | "transparent";
}) {
  const classSize =
    size === "small" ? "p-4" : size === "medium" ? "p-6" : "p-8";

  const classType =
    type === "outlined"
      ? "border bg-transparent"
      : type === "transparent"
      ? "bg-transparent border-none"
      : "bg-neutral-800 border-neutral-900 border-2";
  return (
    <div className={` rounded-lg ${classSize} ${classType} ${className}`}>
      {children}
    </div>
  );
}
