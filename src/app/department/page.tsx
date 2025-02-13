import { FormNew } from "@/app/department/components/form/FormNew";
import { TableList } from "@/app/department/components/list/TableList";
import { DefaultPage } from "@/components/elements/layouts/DefaultPage";
import { Locale } from "@/i18n-config";

export default async function Page(props: {
  params: Promise<{ lang: Locale }>;
}) {
  return (
    <DefaultPage
      titleI18="department.title"
      actions={
        <div className="bg-neutral-800 py-3 px-6">
          <p className="font-bold pl-3">Adicionar nova departamento</p>
          <FormNew inline />
        </div>
      }
      tableList={<TableList />}
    />
  );
}
