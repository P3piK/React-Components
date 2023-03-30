import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styles from "./CartHeader.module.css";
import CartContext from "../../store/cart-context";

function CartHeader(props) {
  const ctx = useContext(CartContext);

  return (
    <div className={styles.cart} onClick={props.onShowCart}>
      <FontAwesomeIcon icon={faCartShopping} />
      <p>Your Cart</p>
      <p className={styles.counter}>{ctx.totalAmount}</p>
    </div>
  );
}

export default CartHeader;
