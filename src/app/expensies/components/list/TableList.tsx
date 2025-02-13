import { FormNew } from "@/app/expensies/components/form/FormNew";
import { Money } from "@/components/elements";
import { Table, Tbody, Td, Th, Thead, Tr } from "@/components/ui";
import DateTimeComponent from "@/components/ui/date/DateTime";
import mockExpensies from "@/mocks/expensies.mock";
import { CATEGORIES } from "@/types/enum/Categories.enum";
import mockTagsByCategory from "@/mocks/tag.mock";
export default function ExpenseTableList() {
  return (
    <>
      <div className="mb-5">
        <FormNew inline />
      </div>

      <Table>
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Valor</Th>
            <Th>Parcelas</Th>
            <Th>Forma</Th>
            <Th>Tipo</Th>
            <Th>Departamento</Th>
            <Th>Origem</Th>
            <Th>Ultimo pagamento</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {mockExpensies.map((expense) => (
            <Tr key={expense._id}>
              <Td>{expense.name}</Td>
              <Td>
                <Money>{expense.value}</Money>
              </Td>
              <Td>
                {expense.installment.current}/{expense.installment.total}
              </Td>
              <Td>
                <select name="" id="" className="bg-transparent p-1">
                  {mockTagsByCategory[CATEGORIES.PAYMENT_FORM].map((tag) => (
                    <option
                      key={tag._id}
                      value={tag._id}
                      {...(expense.tags[CATEGORIES.PAYMENT_FORM].name ===
                        tag.name && { selected: true })}
                    >
                      {tag.name}
                    </option>
                  ))}
                </select>
                {/* {expense.tags[CATEGORIES.PAYMENT_FORM].name} */}
              </Td>
              <Td>{expense.tags[CATEGORIES.PAYMENT_METHOD].name}</Td>
              <Td>{expense.tags[CATEGORIES.DEPARTMENT].name}</Td>
              <Td>{expense.tags[CATEGORIES.PAYMENT_ORIGIN].name}</Td>
              <Td>
                <DateTimeComponent
                  date={expense.timeline.lastPaymentAt}
                  format="date"
                />
              </Td>
              <Td>Actions</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
}
