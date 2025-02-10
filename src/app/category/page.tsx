import { FormNewCategory } from "@/app/category/components/form/FormNewCategory";
import { CategoryList } from "@/app/category/components/list/CategoryList";
import { Card } from "@/components/elements/card/Card";
import { H2 } from "@/components/ui/text/H2";
import { H3 } from "@/components/ui/text/H3";

export default function CategoryPage() {
  return (
    <div className="container">
      <div className="mb-10">
        <H2>Categorias</H2>
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
