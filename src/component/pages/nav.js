import React from "react";
import NavStyle from "../styles/Nav_Css.module.css";
import Button from "../ui/button.js";

const nav = (props) => {
  const { show, onLogout } = props;
  return (
    <div>
      <div className={NavStyle.nav}>
        <h1 className={NavStyle.h1}>
          chji<span className={NavStyle.span}>oke</span>
        </h1>
        {show && (
          <ul className={`flex ` + NavStyle.ul}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contct">Contact</a>
            </li>
            <Button className="shadow-md" onClick={onLogout}>
              LogOut
            </Button>
          </ul>
        )}
      </div>
    </div>
  );
};

export default nav;
