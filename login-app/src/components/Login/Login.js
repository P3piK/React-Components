import React, { useContext, useEffect, useReducer, useRef, useState } from "react";
import AuthContext from "../../store/auth-context";
import Card from "../UI/Card";
import Input from "../UI/Input";
import styles from "./Login.module.css";

const usernameReducer = (state, action) => {
  if (action.type === "INPUT_USERNAME") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

function Login(props) {
  const ctx = useContext(AuthContext);
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [usernameState, dispatchUsername] = useReducer(usernameReducer, {
    value: "",
    isValid: true,
  });

  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setIsValid(usernameState.isValid && password.trim().length > 6);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [usernameState.isValid, password]);

  const changeUsernameHandler = (event) => {
    dispatchUsername({ type: "INPUT_USERNAME", val: event.target.value });
  };

  const validateUsernameHandler = () => {
    dispatchUsername({ type: "INPUT_BLUR" });
  };

  const changePasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const validatePasswordHandler = () => {
    setIsPasswordValid(password.trim().length > 6);
  };

  const loginHandler = (event) => {
    event.preventDefault();

    if (isValid) {
      ctx.onLogIn(usernameState.value, password);
    }
    else if (!usernameState.isValid) {
      usernameRef.current.focus();
    }
    else {
      passwordRef.current.focus();
    }
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={loginHandler}>
        <Input
        ref={usernameRef}
          isValid={usernameState.isValid}
          label="Username"
          type="text"
          value={usernameState.value}
          onChange={changeUsernameHandler}
          onBlur={validateUsernameHandler}
        />
        <Input
        ref={passwordRef}
          isValid={isPasswordValid}
          label="Password"
          type="password"
          value={password}
          onChange={changePasswordHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={styles.action}>
          <button type="submit" >
            Log In
          </button>
        </div>
      </form>
    </Card>
  );
}

export default Login;
