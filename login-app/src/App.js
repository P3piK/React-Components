import { useContext } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import AuthContext from "./store/auth-context";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <>
      <NavBar />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
