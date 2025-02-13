import { Button } from "@/components/ui/buttons";
import React from "react";

export function DefaultButton(props: Button) {
  return (
    <Button
      onClick={props.onClick}
      className="hover:border-fuchsia-400 hover:text-fuchsia-400 border-neutral-200 text-neutral-200 text-xs"
    >
      {props.children}
    </Button>
  );
}
