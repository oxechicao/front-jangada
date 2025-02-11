import { Table, Tbody, Td, Th, Thead, Tr } from "@/components/ui";

export function CategoryList() {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Descrição</Th>
          <Th>Ativo</Th>
          <Th>Ações</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Nome</Td>
          <Td>Descrição</Td>
          <Td>Ativo</Td>
          <Td>Ações</Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
