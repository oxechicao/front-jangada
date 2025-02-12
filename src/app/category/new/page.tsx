import { FormNewCategory } from "@/app/category/components/form/FormNewCategory";
import { Card } from "@/components/elements/card/Card";
import { H2 } from "@/components/ui/text/H2";

export default function NewCategoryPage() {
  return (
    <div className="container">
      <div className="mb-10">
        <H2>Nova categoria</H2>
      </div>
      <Card>
        <FormNewCategory />
      </Card>
    </div>
  );
}
