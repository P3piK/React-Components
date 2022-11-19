import "./App.css";
import NewExpense from './components/NewExpense/NewExpense'
import Expenses from "./components/Expenses/Expenses";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(DUMMY_DATA);

  const addExpenseHandler = (expense) => {
    setItems(prevState => {
      return [expense, ...prevState]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={items} />
    </div>
  );
}

export default App;

const DUMMY_DATA = [
  {
    id: "e1",
    title: "Toilette Paper",
    price: 294.39,
    date: new Date(2021, 2, 29),
  },
  {
    id: "e2",
    title: "Chips",
    price: 24.39,
    date: new Date(2021, 5, 29),
  },
  {
    id: "e3",
    title: "Tomato Soup",
    price: 4.99,
    date: new Date(2021, 1, 29),
  },
];