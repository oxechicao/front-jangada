import "server-only";

export type Locales = "en-US" | "pt-BR";

const enUS = require("./i18n/en-US.json");
const ptBR = require("./i18n/pt-BR.json");

const dictionaries = {
  "en-US": enUS,
  "pt-BR": ptBR,
};

export const getDictionary = (locale: "en-US" | "pt-BR") => {
  if (!dictionaries[locale]) {
    throw new Error(`Locale ${locale} not found`);
  }

  return dictionaries[locale];
};
