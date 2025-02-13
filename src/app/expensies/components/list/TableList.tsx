import { FormNew } from "@/app/expensies/components/form/FormNew";
import { DefaultButton, Money } from "@/components/elements";
import { Table, Tbody, Td, Th, Thead, Tr } from "@/components/ui";
import DateTimeComponent from "@/components/ui/date/DateTime";
import mockExpensies from "@/mocks/expensies.mock";
import { CATEGORIES } from "@/types/enum/Categories.enum";
import mockTagsByCategory from "@/mocks/tag.mock";
import Select from "@/components/ui/forms/Select";
import { useExpenseTable } from "@/app/expensies/components/list/useExpenseTable";



export default function ExpenseTableList() {
  const { mapOptions } = useExpenseTable();

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
                <Select 
                  name="paymentForm" 
                  options={mapOptions(mockTagsByCategory[CATEGORIES.PAYMENT_FORM], expense.tags[CATEGORIES.PAYMENT_FORM]._id)} 
                />
              </Td>
              <Td>
              <Select 
                  name="paymentMethod" 
                  options={mapOptions(mockTagsByCategory[CATEGORIES.PAYMENT_METHOD], expense.tags[CATEGORIES.PAYMENT_METHOD]._id)} 
                />
              </Td>
              <Td>
              <Select 
                  name="department" 
                  options={mapOptions(mockTagsByCategory[CATEGORIES.DEPARTMENT], expense.tags[CATEGORIES.DEPARTMENT]._id)} 
                />
              </Td>
              <Td>
              <Select 
                  name="paymentOrigin" 
                  options={mapOptions(mockTagsByCategory[CATEGORIES.PAYMENT_ORIGIN], expense.tags[CATEGORIES.PAYMENT_ORIGIN]._id)} 
                />
              </Td>
              <Td>
                <DateTimeComponent
                  date={expense.timeline.lastPaymentAt}
                  format="date"
                />
              </Td>
              <Td>
                <DefaultButton> PAGAR </DefaultButton>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
}
