import { Default } from "../default";

export interface Goal extends Default {
  name: string;
  tags: Tag[];
}
