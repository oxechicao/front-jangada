import { Default } from "../default";

export interface User extends Default {
  email: string;
  token: string;
}
