import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import styles from "./CartContainer.module.css";
import CartItem from "./CartItem";

function CartContainer(props) {
  const ctx = useContext(CartContext);
  const [showOrderButton, setShowOrderButton] = useState(false);

  useEffect(() => {
    setShowOrderButton(ctx.items.length > 0);
  }, [ctx.items]);

  const orderHandler = () => {
    console.log("Ordering...");
  };

  console.log(ctx);

  return (
    <Modal onClose={props.onClose}>
      <Card className={styles.cart}>
        <div className={styles.items}>
          {ctx.items.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              amount={item.amount}
            />
          ))}
        </div>
        <div className={styles.summary}>
          <h3>Total Price</h3>
          <h3>${ctx.totalPrice}</h3>
        </div>
        <div className={styles.action}>
          <button className={styles.close} onClick={props.onClose}>Close</button>
          {showOrderButton && <button className={styles.order} onClick={orderHandler}>Order</button>}
        </div>
      </Card>
    </Modal>
  );
}

export default CartContainer;
