import "../UI/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import {useState} from 'react'
function ExpenseItem(props) {

  let title = props.props.title
  let date = props.props.date;
  let amount = props.props.amount;

  return (
    <div className="expense-item">
      <ExpenseDate date={date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
