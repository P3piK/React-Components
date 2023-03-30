import React from "react";
import Card from "../UI/Card"
import styles from "./MealInfo.module.css";

function MealInfo() {
  return (
    <Card className={styles.info}>
      <h3>Delicious Food, Delivered To You</h3>
      <p>
        Choose your favourite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </Card>
  );
}

export default MealInfo;
