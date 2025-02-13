import { CATEGORIES } from "@/types/enum/Categories.enum";
import { Default } from "../default";
export default interface Category extends Default {
  name: CATEGORIES;
}
