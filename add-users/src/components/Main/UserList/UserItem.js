import React from 'react'
import styles from './UserItem.module.css'

function UserItem(props) {
  return (
    <li className={styles.item}>
        <p>{props.username} ({props.age} years old)</p>
    </li>
  )
}

export default UserItem