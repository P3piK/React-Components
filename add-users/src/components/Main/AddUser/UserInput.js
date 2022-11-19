import React from "react";
import styles from './UserInput.module.css';

function UserInput(props) {
  return (
    <div className={styles["user-input"]}>
      <label>{props.children}</label>
      <input type={props.type} step={props.step} onChange={props.onChange} value={props.value}/>
    </div>
  );
}

export default UserInput;
