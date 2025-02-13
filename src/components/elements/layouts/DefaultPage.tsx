import { Card } from "@/components/elements/card/Card";
import { Container } from "@/components/ui/container/Container";
import I18n from "@/components/ui/i18n/i18n";
import { H2 } from "@/components/ui/text/H2";

export async function DefaultPage({
  titleI18,
  actions,
  tableList,
}: {
  titleI18: string;
  actions: React.ReactNode;
  tableList: React.ReactNode;
}) {
  return (
    <>
      <Container>
        <div className="flex justify-between align-middle mb-10 items-center gap-5">
          <H2>
            <I18n value={titleI18} />
          </H2>
          {actions}
        </div>
        <Card>{tableList}</Card>
      </Container>
    </>
  );
}
