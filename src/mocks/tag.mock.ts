import { Tag } from "@/types/entities/tag";
import { CATEGORIES } from "@/types/enum/Categories.enum";
import { DateTime } from "luxon";
const date = new Date("2021-09-01T00:00:00.000Z");
const dateTime = DateTime.fromJSDate(date)
  .setZone("America/Fortaleza")
  .setLocale("pt-BR");

const tagsDepartments = [
  "Baby",
  "Casa",
  "Curso",
  "Educação",
  "Eletro",
  "Farmacia",
  "Fast",
  "Ingresso",
  "Jogo",
  "Mercado",
  "Movel",
  "Pessoal",
  "Pet",
  "Reserva",
  "Streaming",
  "Uber",
  "Viagem",
  "Telefonia",
  "Transporte",
  "Vestuário",
  "Desconhecido",
];

const tagsMethod = ["Mensalidade", "A Vista", "Parcelado", "Planejamento"];
const tagsForm = ["Crédito", "Débito", "Dinheiro", "Pix", "Transferência"];
const tagsOrigin = ["Itau", "Inter", "Nubank", "Irmão"];

export const mockTagsByCategory = {
  [CATEGORIES.DEPARTMENT]: tagsDepartments.map((tag, index) => ({
    _id: index.toString(),
    name: tag,
    i18n: tag.replace(/\s/g, "-").toLowerCase(),
    type: CATEGORIES.DEPARTMENT,
    createdAt: dateTime.plus({ days: index }).toJSDate(),
  })),
  [CATEGORIES.PAYMENT_METHOD]: tagsMethod.map((tag, index) => ({
    _id: (index + tagsDepartments.length).toString(),
    name: tag,
    i18n: tag.replace(/\s/g, "-").toLowerCase(),
    type: CATEGORIES.PAYMENT_METHOD,
    createdAt: dateTime.plus({ days: index }).toJSDate(),
  })),
  [CATEGORIES.PAYMENT_FORM]: tagsForm.map((tag, index) => ({
    _id: (index + tagsDepartments.length + tagsMethod.length).toString(),
    name: tag,
    i18n: tag.replace(/\s/g, "-").toLowerCase(),
    type: CATEGORIES.PAYMENT_FORM,
    createdAt: dateTime.plus({ days: index }).toJSDate(),
  })),
  [CATEGORIES.PAYMENT_ORIGIN]: tagsOrigin.map((tag, index) => ({
    _id: (
      index +
      tagsDepartments.length +
      tagsMethod.length +
      tagsForm.length
    ).toString(),
    name: tag,
    i18n: tag.replace(/\s/g, "-").toLowerCase(),
    type: CATEGORIES.PAYMENT_ORIGIN,
    createdAt: dateTime.plus({ days: index }).toJSDate(),
  })),
};

export const mockTagsList: Tag[] = [
  ...mockTagsByCategory[CATEGORIES.DEPARTMENT],
  ...mockTagsByCategory[CATEGORIES.PAYMENT_METHOD],
  ...mockTagsByCategory[CATEGORIES.PAYMENT_FORM],
  ...mockTagsByCategory[CATEGORIES.PAYMENT_ORIGIN],
];

export default mockTagsByCategory;
