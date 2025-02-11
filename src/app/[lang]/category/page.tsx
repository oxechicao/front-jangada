import { FormNewCategory } from "@/app/[lang]/category/components/form/FormNewCategory";
import { CategoryList } from "@/app/[lang]/category/components/list/CategoryList";
import { Card } from "@/components/elements/card/Card";
import I18n from "@/components/ui/i18n/i18n";
import { H2 } from "@/components/ui/text/H2";
import { H3 } from "@/components/ui/text/H3";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/i18n-config";

export default async function CategoryPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);
  console.log({ lang, dictionary });
  return (
    <div className="container">
      <div className="mb-10">
        <H2>
          <I18n value="category.title" dictionary={dictionary} />
        </H2>
      </div>
      <div className="flex justify-end mb-10 items-center gap-5">
        <H3 className="">Adicionar categoria</H3>
        <Card size="small" type="outlined">
          <FormNewCategory inline />
        </Card>
      </div>

      <Card>
        <CategoryList />
      </Card>
    </div>
  );
}
