import { SubmitButton } from "@/components/ui/buttons/SubmitButton";
import { ButtonNoChildren } from "@/components/ui/buttons/types";

export function NewButton(props: ButtonNoChildren) {
  return <SubmitButton onClick={props.onClick}>Novo</SubmitButton>;
}
