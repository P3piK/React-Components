import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import UserInput from "./UserInput";
import ErrorModal from "../../UI/ErrorModal";

function AddUser(props) {
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log({ username, age });

    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({ title: "Invalid input", message: "Input must not be empty." });
      return;
    }

    if (+age < 0) {
      setError({ title: "Negative age", message: "Age must be non-negative." });
      return;
    }

    props.onAddUser({ id: Math.random(), username: username, age: age });
    setUsername("");
    setAge("");
  };

  const changeUsernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const changeAgeHandler = (event) => {
    setAge(event.target.value);
  };

  const confirmModalHandler = () => {
    setError();
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={confirmModalHandler}
        />
      )}
      <Card className={styles["add-user"]}>
        <form onSubmit={addUserHandler}>
          <UserInput
            type="text"
            value={username}
            onChange={changeUsernameHandler}
          >
            Username
          </UserInput>
          <UserInput
            type="number"
            value={age}
            step="1"
            onChange={changeAgeHandler}
          >
            Age
          </UserInput>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
