import React from "react";
import GoalItem from "./GoalItem";
import styles from "./GoalList.module.css";

function GoalList(props) {
  return (
    <ul className={styles["goal-list"]}>
      {props.items.map((item) => {
        return (
          <GoalItem key={item.id} id={item.id} onGoalClick={props.onRemoveGoal}>
            {item.value}
          </GoalItem>
        );
      })}
    </ul>
  );
}

export default GoalList;
