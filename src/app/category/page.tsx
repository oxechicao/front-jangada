import { FormNewCategory } from "@/app/category/_components/form/FormNewCategory";
import { CategoryList } from "@/app/category/_components/list/CategoryList";
import { DefaultPage } from "@/components/elements/layouts/DefaultPage";
import { Locale } from "@/i18n-config";

export default async function CategoryPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  return (
    <DefaultPage
      titleI18="category.title"
      actions={
        <div className="bg-neutral-800 py-3 px-6">
          <p className="font-bold pl-3">Adicionar nova categoria</p>
          <FormNewCategory inline />
        </div>
      }
      tableList={<CategoryList />}
    />
  );
}
