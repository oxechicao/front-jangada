"use client";

import useExpenseTable from "@/app/expensies/_components/list/useExpenseTable";
import { NewButton } from "@/components/elements/buttons/NewButton";
import SelectInput from "@/components/ui/forms/SelectInput";
import { Form } from "@/components/ui/forms/Form";
import I18n from "@/components/ui/i18n/i18n";
import mockTagsByCategory from "@/mocks/tag.mock";
import { CATEGORIES } from "@/types/enum/Categories.enum";
import { SubmitHandler, useForm } from "react-hook-form";
import { TextInput } from "@/components/ui";

type Inputs = {
  name: string;
};

export default function FormNew({ inline = false }: { inline?: boolean }) {
  const { mapOptions } = useExpenseTable();
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
        <TextInput label={<I18n value="form.value" />} placeholder="Digite aqui" />
        <TextInput
          direction="column"
          label={<I18n value="form.name" />}
          placeholder="Digite aqui"
        />
        <TextInput
          direction="column"
          label={<I18n value="form.value" />}
          placeholder="0000"
        />
        <SelectInput
          direction="column"
          label={<I18n value="form.paymentForm" />}
          name="paymentForm"
          optionsValues={mapOptions(
            mockTagsByCategory[CATEGORIES.PAYMENT_FORM],
            "",
          )}
        />
        <SelectInput
          direction="column"
          label={<I18n value="form.paymentMethod" />}
          name="paymentMethod"
          optionsValues={mapOptions(
            mockTagsByCategory[CATEGORIES.PAYMENT_METHOD],
            "",
          )}
        />
        <SelectInput
          direction="column"
          label={<I18n value="form.paymentOrigin" />}
          name="paymentOrigin"
          optionsValues={mapOptions(
            mockTagsByCategory[CATEGORIES.PAYMENT_ORIGIN],
            "",
          )}
        />
        <SelectInput
          direction="column"
          label={<I18n value="form.department" />}
          name="department"
          optionsValues={mapOptions(
            mockTagsByCategory[CATEGORIES.DEPARTMENT],
            "",
          )}
        />
        <NewButton />
      </Form>
    </>
  );
}
