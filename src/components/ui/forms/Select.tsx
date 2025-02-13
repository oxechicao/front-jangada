export default function Select({
  name,
  options,
  className,
}: {
  name: string,
  options: { name: string; value: string, default?: boolean }[],
  className?: string
}) {
  return (
    <select name={name} className={`bg-transparent p-1 ${className}`}>
      {options.map((option, index) => (
        <option
          key={`${option.value}-${index}-${name}-option`}
          value={option.value}
          selected={option.default}
        >
          {option.name}
        </option>
      ))}
    </select>
  )
}