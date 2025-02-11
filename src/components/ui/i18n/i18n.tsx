import { Locales } from "@/dictionaries";

export default function I18n({
  value,
  dictionary,
}: Readonly<{
  value: string;
  lang?: Locales;
  dictionary: Record<string, any>;
}>) {
  const text = value.split(".").reduce((result, k) => result?.[k], dictionary);

  return <>{text || ""}</>;
}
