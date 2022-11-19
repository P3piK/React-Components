import React, { useState } from "react";
import styles from "./NewGoal.module.css";

function NewGoal(props) {
  const [goalText, setGoalText] = useState("");
  const [isValid, setIsValid] = useState(true);

  const changeGoalHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }

    setGoalText(event.target.value);
  };

  const submitGoalHandler = (event) => {
    event.preventDefault();
    if (goalText.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal({
      id: Math.random(),
      value: goalText,
    });
    setGoalText("");
  };

  return (
    <form className={styles["new-goal"]} onSubmit={submitGoalHandler}>
      <div className={`${styles["new-goal__controls"]} ${!isValid && styles.invalid}`}>
        <label>Goal:</label>
        <input type="text" value={goalText} onChange={changeGoalHandler} />
      </div>
      <div className={styles["new-goal__actions"]}>
        <button type="submit">Add Goal</button>
      </div>
    </form>
  );
}

export default NewGoal;
