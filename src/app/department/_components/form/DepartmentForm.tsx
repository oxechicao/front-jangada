"use client";

import { NewButton } from "@/components/elements/buttons/NewButton";
import { TextInput } from "@/components/ui";
import { Form } from "@/components/ui/forms/Form";
import I18n from "@/components/ui/i18n/i18n";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
};

export function DepartmentForm({ inline = false }: { inline?: boolean }) {
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
        <TextInput
          label={<I18n value="form.name" />}
          placeholder="Digite aqui"
        />
        <NewButton />
      </Form>
    </>
  );
}
