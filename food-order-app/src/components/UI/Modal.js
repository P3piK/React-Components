import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

function Backdrop(props) {
  return <div className={styles.backdrop} onClick={props.onClose} />;
}

const portalElement = document.getElementById("overlays");

function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <div className={styles.overlay}>{props.children}</div>,
        portalElement
      )}
    </>
  );
}

export default Modal;
