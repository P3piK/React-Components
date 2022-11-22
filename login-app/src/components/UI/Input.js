import React, { useImperativeHandle, useRef } from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div
      className={`${styles.control} ${!props.isValid ? styles.invalid : ""}`}
    >
      <label>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
