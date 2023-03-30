import React, { useEffect, useState } from "react";
import styles from "./MealItemAmount.module.css";

function MealItemAmount(props) {
  const [isValid, setIsValid] = useState(false);
  const [amount, setAmount] = useState(1);

  const changeAmountHandler = (event) => {
    setAmount(event.target.value);
  };
  const addItemHandler = () => {
    props.onAdd(amount);
  };

  useEffect(() => {
    setIsValid(amount > 0 && amount < 100);
  }, [amount]);

  return (
    <div>
      <div className={styles.control}>
        <label>Amount</label>
        <input
          className={`${!isValid && styles.invalid}`}
          type="number"
          min="0"
          max={99}
          step="1"
          value={amount}
          onChange={changeAmountHandler}
        />
      </div>
      <div className={styles.action}>
        <button disabled={!isValid} onClick={addItemHandler}>
          + Add
        </button>
      </div>
    </div>
  );
}

export default MealItemAmount;
