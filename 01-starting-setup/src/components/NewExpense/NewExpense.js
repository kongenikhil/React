import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  let [displayFormlag , setFormFlag] = useState(false);
  const modifyFormFlag = () => {
    setFormFlag((prevState)=>{
      return !prevState
    });
  };
  return (
    <div className="new-expense">
      {!displayFormlag && (
        <button type="submit" onClick={modifyFormFlag}>
          Add New Expense
        </button>
      )}
      {displayFormlag && (
        <div>
          <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
           <button type="submit" onClick={modifyFormFlag}>
          Cancel
        </button>
        </div>
    )}
    </div>
  );
};

export default NewExpense;
