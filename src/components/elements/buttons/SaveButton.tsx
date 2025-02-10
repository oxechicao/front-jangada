import { SubmitButton } from "@/components/ui/buttons/SubmitButton";
import { ButtonNoChildren } from "@/components/ui/buttons/types";

export function SaveButton(props: ButtonNoChildren) {
  return <SubmitButton onClick={props.onClick}>Salvar</SubmitButton>;
}
