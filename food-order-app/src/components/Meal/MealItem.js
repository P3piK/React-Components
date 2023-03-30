import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import styles from "./MealItem.module.css";
import MealItemAmount from "./MealItemAmount";

function MealItem(props) {
  const ctx = useContext(CartContext);
  const addMealHandler = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: +amount,
    });
  };

  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <label className={styles.name}>{props.name}</label>
        <p className={styles.desc}>{props.desc}</p>
        <p className={styles.price}>${props.price}</p>
      </div>
      <MealItemAmount onAdd={addMealHandler} />
    </li>
  );
}

export default MealItem;
