import { CATEGORIES } from "@/types/entities/category";
import { Default } from "../default";
import { Tag } from "./tag";

export interface Expenses extends Default {
  name: string;
  value: number;
  installment: { current: number; total: number };
  timeline: { lastPaymentAt: Date; purchaseAt: Date; paymentsAt: Date[] };
  tags: { [key in CATEGORIES]: Tag };
}
