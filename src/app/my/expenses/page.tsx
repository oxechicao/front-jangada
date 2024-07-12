import { DefaultButton } from "@/components/elements/buttons";
import { PayButton } from "@/components/elements/buttons/PayButton";
import { RemoveButton } from "@/components/elements/buttons/RemoveButton";
import { TitleSection } from "@/components/ui/section";
import {
  Table,
  Tbody,
  Td,
  Tfooter,
  Th,
  Thead,
  Tr,
} from "@/components/ui/table";
import { Money } from "@/components/ui/text";
import { MOCK_NOTION_CSV } from "@/mocks/notionCsv";

const dataTable = MOCK_NOTION_CSV.filter((f) => f.finished === false);

export default function Expenses() {
  return (
    <section>
      <header className="flex justify-between">
        <TitleSection>Despesas</TitleSection>
        <DefaultButton>Nova Despesa</DefaultButton>
      </header>
      <main className="x'">
        <Table>
          <Thead>
            <Th>Valor da Parcela</Th>
            <Th>Nome</Th>
            <Th>Tipo de Pagamento</Th>
            <Th>Origem de Pagamento</Th>
            <Th>Departamento</Th>
            <Th>Parcelas</Th>
            <Th>Ultimo Pagamento</Th>
            <Th>Data da Compra</Th>
            <Th> </Th>
          </Thead>

          <Tbody>
            {dataTable.map((data, index) => (
              <Tr key={index}>
                <Td>
                  <Money>{data.value / 100}</Money>
                </Td>
                <Td>{data.name}</Td>
                <Td>
                  {
                    data.tags.find((t) => t.category.name === `paymentForm`)
                      ?.name
                  }
                </Td>
                <Td>
                  {
                    data.tags.find((t) => t.category.name === `paymentOrigin`)
                      ?.name
                  }
                </Td>
                <Td>
                  {
                    data.tags.find((t) => t.category.name === `department`)
                      ?.name
                  }
                </Td>
                <Td>
                  {data.currentInstallment} / {data.totalInstallment}
                </Td>
                <Td>{data.lastPaymentDate.toLocaleDateString("pt-BR")}</Td>
                <Td>{data.purchaseDate.toLocaleDateString("pt-BR")}</Td>
                <Td className="flex gap-1">
                  <PayButton />
                  <RemoveButton />
                </Td>
              </Tr>
            ))}
            <Tfooter>
              <Tr>
                <Td>
                  <Money>
                    {dataTable.reduce((a, d) => a + d.value, 0) / 100}
                  </Money>
                </Td>
              </Tr>
            </Tfooter>
          </Tbody>
        </Table>
      </main>
    </section>
  );
}
