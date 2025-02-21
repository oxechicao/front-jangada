import FormNew from "@/app/expensies/_components/form/FormNew";
import ExpenseTableList from "@/app/expensies/_components/list/TableList";
import { DefaultPage } from "@/components/elements/layouts/DefaultPage";

export default async function Page() {
  return (
    <DefaultPage
      titleI18="expense.title"
      actions={
        <div className="bg-neutral-800 py-3 px-6">
          <p className="font-bold pl-3"></p>
        </div>
      }
      tableList={<ExpenseTableList />}
    />
  );
}
