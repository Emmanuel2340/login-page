import React from "react";
import classes from "./uistyles/button.style.module.css";

const button = (props) => {
  return (
    <button
      onClick={props.onClick}
      type={props.type || "button"}
      className={`${props.className || classes.btn} shadow-xl`}
    >
      {props.children}
    </button>
  );
};

export default button;
