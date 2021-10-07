import { useState } from "react";
import DisplayExpenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const dummyExpenses = [
  { title: "Grocery", amount: "200", date: new Date(2021, 2, 28) },
  { title: "Bills", amount: "300", date: new Date(2020, 3, 12) },
  { title: "Credit", amount: "80", date: new Date(1996, 5, 4) },
  { title: "Subs", amount: "289", date: new Date(1996, 7, 5) },
  { title: "Rent", amount: "199", date: new Date(2023, 6, 1) },
  { title: "Food", amount: "1991", date: new Date(2022, 3, 1) },
  { title: "Water", amount: "196", date: new Date(2020, 2, 1) },
];
function App() {
  const [expenses, addAnExpense] = useState(dummyExpenses);

  const onAddExpense = (expenseData) => {
    addAnExpense((previousExpense) => {
      return [expenseData, ...previousExpense];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={onAddExpense}></NewExpense>
      <DisplayExpenses expenses={expenses}></DisplayExpenses>
    </div>
  );
}

export default App;
