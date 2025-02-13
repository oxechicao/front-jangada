import { CATEGORIES } from "@/types/entities/category";
import { Default } from "../default";

export interface Tag extends Default {
  name: string;
  i18n: string;
  type: CATEGORIES;
}
