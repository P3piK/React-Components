import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__title">{props.title}</div>
        <div className="expense-item__price">${props.price}</div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
