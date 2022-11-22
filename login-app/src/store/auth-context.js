import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogIn: () => {},
  onLogOut: (username, password) => {},
});

export function AuthContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "1");
  }, []);

  const loginHandler = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "1");
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogIn: loginHandler,
        onLogOut: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
