import "../UI/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import {useState} from 'react'
function ExpenseItem(props) {
  const [titleOne , setTitle] = useState(props.props.title);
  let title = props.props.title
  let date = props.props.date;
  let amount = props.props.amount;

  const clickHandler = () => {
    setTitle('Updated Title') 
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
}

export default ExpenseItem;
