"use client";

import { TextInput } from "@/components/elements";
import { SaveButton } from "@/components/elements/buttons/SaveButton";
import { Form } from "@/components/ui/forms/Form";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
};

export function FormNewCategory({ inline = false }: { inline?: boolean }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        direction={inline ? "row" : "column"}
      >
        <TextInput label="Name:" placeholder="Digite aqui" />
        <SaveButton />
      </Form>
    </>
  );
}
