import { Button } from "@/components/ui/buttons";
import React from "react";

export function DefaultButton(props: Button) {
  return (
    <Button
      onClick={props.onClick}
      className="bg-fuchsia-500 border-fuchsia-500 text-white font-bold text-xs hover:bg-fuchsia-400 hover:border-fuchsia-400"
    >
      {props.children}
    </Button>
  );
}
