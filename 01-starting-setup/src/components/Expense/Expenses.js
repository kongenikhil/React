import { useState } from "react";
import "../UI/ExpenseItem.css";
import ExpenseItem from "../Expense/ExpenseItem";
import FilterByYear from "../services/FilterbyYear";
function DisplayExpenses(props) {
  let expenses = props.expenses;
  let [ filterYear , changeFilterYear] = useState('2020') ;
  let expensesContent = <h3>No Expenses Found for year </h3>
 
  const setFilterYear = (year) => {
    changeFilterYear(year);
  };
  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear;
  })
  return (
    <div className="new-expense">
      <div className="expense-item">
        <button type="submit">Filter</button>
        <FilterByYear
          selected={filterYear}
          setFilterYear={setFilterYear}
        ></FilterByYear>
      </div>
      { filteredExpenses.length === 0 && expensesContent  }
      { filteredExpenses.length > 0 &&
        filteredExpenses.map((expense, index) => (
          <ExpenseItem key={index} props={expense}></ExpenseItem>
        ))}
    </div>
);
}

export default DisplayExpenses;
