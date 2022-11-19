import React from 'react'
import './GoalItem.css'

function GoalItem(props) {

    const goalClickHandler = () => {
        props.onGoalClick(props.id);
    }

  return (
    <li className='goal-item' onClick={goalClickHandler}>
        <div className='goal-item__value'>{props.children}</div>
    </li>
  )
}

export default GoalItem