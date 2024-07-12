"use client";

import { TextInput } from "@/components/ui/text/TextInput";
import { Form } from "@/components/ui/forms";

export const FormNewCard = () => {
  return (
    <Form onSubmit={() => console.log("a")}>
      <TextInput />
    </Form>
  );
};
