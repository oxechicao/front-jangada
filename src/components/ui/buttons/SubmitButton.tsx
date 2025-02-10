import { DefaultButton } from "@/components/ui/buttons/DefaultButton";
import { ButtonNoChildren } from "@/components/ui/buttons/types";

export const SubmitButton = (props: ButtonNoChildren) => {
  return (
    <DefaultButton type="submit" onClick={props.onClick}>
      {props.children || "Submit"}
    </DefaultButton>
  );
};
