import { getDictionary, Locales } from "@/dictionaries";

export default function I18n({
  value,
}: Readonly<{
  value: string;
  lang?: Locales;
}>) {
  const dictionary: Record<string, {}> = getDictionary("pt-BR");
  const text = value.split(".").reduce((result, k) => result?.[k], dictionary);
  return <>{text || ""}</>;
}
