"use client";

import { TextInput } from "@/components/ui/forms/TextInput";
import { Form } from "@/components/ui/forms";

export const FormNewCard = () => {
  return (
    <Form onSubmit={() => console.log("a")}>
      <TextInput label="" />
    </Form>
  );
};
