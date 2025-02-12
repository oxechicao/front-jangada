import { Card } from "@/components/elements/card/Card";
import { Container } from "@/components/ui/container/Container";
import I18n from "@/components/ui/i18n/i18n";
import { H2 } from "@/components/ui/text/H2";
import { H3 } from "@/components/ui/text/H3";

export async function DefaultPage({
  title,
  formNew,
  tableList,
  dictionary,
}: {
  title: string;
  formNew: React.ReactNode;
  tableList: React.ReactNode;
  dictionary: Record<string, any>;
}) {
  return (
    <>
      <Container>
        <div className="mb-10">
          <H2>
            <I18n value="category.title" dictionary={dictionary} />
          </H2>
        </div>
        <div className="flex justify-end mb-10 items-center gap-5">
          <H3 className="">Adicionar categoria</H3>
          <Card size="small" type="outlined">
            {formNew}
          </Card>
        </div>

        <Card>{tableList}</Card>
      </Container>
    </>
  );
}
