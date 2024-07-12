import { Default } from "../default";
import { Tag } from "./tag";

export interface Expenses extends Default {
  name: string;
  value: number;
  currentInstallment: number;
  totalInstallment: number;
  purchaseDate: Date;
  paymentDate: Date;
  tags: Array<Tag>;
}
