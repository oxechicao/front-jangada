import { Button } from "@/components/ui";

export interface ButtonNoChildren extends Omit<Button, "children"> {
  children?: React.ReactNode;
}
