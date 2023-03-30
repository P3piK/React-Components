import React, { useState } from "react";
import CartHeader from "./CartHeader";
import styles from "./Header.module.css";
import CartContainer from "../Cart/CartContainer";
import mealsImage from "../../assets/meals.jpg"

function Header(props) {
  const [showCart, setShowCart] = useState(false);

  const closeCartHandler = () => {
    setShowCart(false);
  };

  const showCartHandler = () => {
    setShowCart(true);
  };

  return (
    <>
      <header>
        <h2 className={styles.title}>ReactMeals</h2>
        <CartHeader onShowCart={showCartHandler} />
        {showCart && <CartContainer onClose={closeCartHandler} />}
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
}

export default Header;
