import React from "react";
import styles from "./Meal.module.css";
import MealInfo from "./MealInfo";
import MealList from "./MealList";

function Meal() {
  return (
    <>
      <MealInfo className={styles.meal} />
      <MealList className={styles.meal} />
    </>
  );
}

export default Meal;
