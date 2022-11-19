import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => {
    setShowForm(true);
  }

  const hideFormHandler = () => {
    setShowForm(false);
  }

  let newExpenseContent = <ExpenseForm onAddExpense={props.onAddExpense} onCancel={hideFormHandler} />;

  if (!showForm) {
    newExpenseContent = <button onClick={showFormHandler}>Add New Expense</button>
  }

  return (
    <Card className='new-expense'>
      {newExpenseContent}
    </Card>
  )
}

export default NewExpense