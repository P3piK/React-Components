import { useState } from "react";
import AddUser from "./components/Main/AddUser/AddUser";
import UserList from "./components/Main/UserList/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers((prevState) => {
      console.log(prevState);
      return [user, ...prevState];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList items={users} />
    </div>
  );
}

export default App;
