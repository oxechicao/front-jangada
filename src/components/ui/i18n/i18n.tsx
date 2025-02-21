"use client";

import { DictionaryContext } from "@/app/_context/DictionaryContext";
import { Locales } from "@/dictionaries";
import { useContext } from "react";

export default function I18n({
  value,
}: Readonly<{
  value: string;
  lang?: Locales;
}>) {
  const { dictionary } = useContext(DictionaryContext);
  const text = value.split(".").reduce((result, k) => result?.[k], dictionary);
  return <>{text || ""}</>;
}
