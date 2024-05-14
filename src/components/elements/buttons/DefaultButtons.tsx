import { Button } from "@/components/ui/buttons";
import React from "react";

type Button = {
  children: React.ReactNode;
  onClick?: () => void;
};
export function DefaultButton(props: Button) {
  return (
    <Button
      onClick={props.onClick}
      className="border-fuchsia-400 text-fuchsia-400 hover:border-fuchsia-200 hover:text-fuchsia-200"
    >
      {props.children}
    </Button>
  );
}
