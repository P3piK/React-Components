import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem";
import styles from "./MealList.module.css";

function MealList() {
  return (
    <Card className={styles.list}>
      <ul>
        {items.map((item) => (
          <MealItem
            key={item.id}
            id={item.id}
            name={item.name}
            desc={item.desc}
            price={item.price}
          />
        ))}
      </ul>
    </Card>
  );
}

const items = [
  {
    id: 0,
    name: "Sushi",
    desc: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: 1,
    name: "Schnitzel",
    desc: "A German speciality!",
    price: 16.5,
  },
  {
    id: 2,
    name: "Barbeque Burger",
    desc: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: 3,
    name: "Green Bowl",
    desc: "Healty... and green...",
    price: 18.99,
  },
];

export default MealList;
