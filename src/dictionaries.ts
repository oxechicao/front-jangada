import "server-only";

export type Locales = "en-US" | "pt-BR";

const dictionaries = {
  "en-US": () => import("./i18n/en-US.json").then((module) => module.default),
  "pt-BR": () => import("./i18n/pt-BR.json").then((module) => module.default),
};

export const getDictionary = async (locale: "en-US" | "pt-BR") =>
  dictionaries[locale]();
