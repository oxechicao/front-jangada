import { Expenses } from "@/types/entities/expense";
import mockTags from "@/mocks/tag.mock";
import { CATEGORIES } from "@/types/enum/Categories.enum";
import { DateTime } from "luxon";
function fabricExpensies(index: number) {
  const current = Math.floor((Math.random() * 10) % 10);

  const date = new Date("2021-09-01T00:00:00.000Z");
  const dateTime = DateTime.fromJSDate(date)
    .setZone("America/Fortaleza")
    .setLocale("pt-BR");

  const diffDays = dateTime
    .plus({ days: index + 1 })
    .diff(dateTime)
    .as("days");

  return {
    _id: index.toString(),
    createdAt: dateTime.toJSDate(),
    name: "Teste" + index,
    timeline: {
      lastPaymentAt: dateTime.plus({ days: index + 1 }).toJSDate(),
      purchaseAt: dateTime.toJSDate(),
      paymentsAt: Array.from({ length: diffDays }, (_, i) =>
        dateTime.plus({ days: i + 1 }).toJSDate(),
      ),
    },
    installment: {
      current,
      total: Math.ceil(Math.round(Math.random() * 10 + current)),
    },
    value: Number(((Math.random() * 1000 + current) % 1000).toFixed(2)),
    tags: {
      [CATEGORIES.DEPARTMENT]:
        mockTags.department[index % mockTags.department.length],
      [CATEGORIES.PAYMENT_METHOD]:
        mockTags.paymentMethod[index % mockTags.paymentMethod.length],
      [CATEGORIES.PAYMENT_FORM]:
        mockTags.paymentForm[index % mockTags.paymentForm.length],
      [CATEGORIES.PAYMENT_ORIGIN]:
        mockTags.paymentOrigin[index % mockTags.paymentOrigin.length],
    },
  };
}

const mockExpensies: Expenses[] = Array.from({ length: 100 }, (_, i) =>
  fabricExpensies(i),
);

export default mockExpensies;
