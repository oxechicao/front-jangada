export const i18n = {
  defaultLocale: "pt-BR",
  locales: ["en-US", "pt-BR"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
