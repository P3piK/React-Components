import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import styles from "./CartItem.module.css";

function CartItem(props) {
  const ctx = useContext(CartContext);
  const incrementHandler = () => {
    ctx.addItem({
      id: props.id,
      amount: 1,
    });
  };

  const decrementHandler = () => {
    ctx.removeItem({
      id: props.id,
      amount: 1,
    });
  };

  return (
    <div className={styles.item}>
      <div className={styles.control}>
        <h3 className={styles.name}>{props.name}</h3>
        <div className={styles["control__numbers"]}>
          <p className={styles.price}>${props.price}</p>
          <p className={styles.amount}>x{props.amount}</p>
        </div>
      </div>
      <div className={styles.action}>
        <button onClick={decrementHandler}>-</button>
        <button onClick={incrementHandler}>+</button>
      </div>
    </div>
  );
}

export default CartItem;
