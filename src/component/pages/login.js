import React, { useState } from "react";
import LoginStyle from "../styles/LoginStyle.module.css";
import Button from "../ui/button";

const Login = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { onChangeShow, onReceiveName } = props;

  const onLogin = (e) => {
    e.preventDefault();
    onChangeShow(name, password);
    onReceiveName(name);
  };

  return (
    <div className={LoginStyle.login}>
      <form onSubmit={onLogin}>
        <div className={LoginStyle.name}>
          <input
            className={LoginStyle.input}
            type="text"
            value={name}
            placeholder="Name.."
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={LoginStyle.name}>
          <input
            className={LoginStyle.input}
            type="password"
            value={password}
            placeholder="password.."
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button className={LoginStyle.button} type="submit">
          login
        </Button>
      </form>
    </div>
  );
};

export default Login;
