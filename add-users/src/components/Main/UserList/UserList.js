import React from "react";
import Card from "../../UI/Card";
import UserItem from "./UserItem";
import styles from "./UserList.module.css";

function UserList(props) {
  let content = <p>No users yet.</p>;

  if (props.items.length > 0) {
    content = props.items.map((item) => (
      <ul  key={item.id}>
        <UserItem username={item.username} age={item.age} />
      </ul>
    ));
  }

  return <Card className={styles["user-list"]}>{content}</Card>;
}

export default UserList;
