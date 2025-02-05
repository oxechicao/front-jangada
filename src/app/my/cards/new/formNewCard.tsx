"use client";

import { TextInput } from "@/components/elements/forms/TextInput";
import { Form } from "@/components/ui/forms";

export const FormNewCard = () => {
  return (
    <Form onSubmit={() => console.log("a")}>
      <TextInput label="" />
    </Form>
  );
};
