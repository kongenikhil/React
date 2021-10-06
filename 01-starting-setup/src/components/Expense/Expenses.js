import "../UI/ExpenseItem.css";
import ExpenseItem from "../Expense/ExpenseItem";
function DisplayExpenses(props) {
  let expenses = props.expenses;
  
  return (
    <div className="expensecard">
      {expenses.map((expense ,index )=>(
        <ExpenseItem key = {index} props={expense}></ExpenseItem>
      ))}
    </div>
  );
}

export default DisplayExpenses;
