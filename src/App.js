import React, { useState } from "react";
import "./App.scss";
import Nav from "./component/pages/nav";
import Home from "./component/pages/home";

const App = () => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState(false);

  const onChangeShow = (name, password) => {
    if (name === "") {
    
      setMessage({
        output: "Please your name shouldn't be empty",
        title: "non empty value in name",
      });
    } else if (password === "") {
      setMessage({
        output: "Please your passwprd shouldn't be empty",
        title: "non empty value in password",
      });
    } else if (password !== name) {
      setMessage({
        output: "please check your password",
        title: "Incorrect password",
      });
    } else {
      setShow(!show);
    }
  };

  const onRemoveMessage = () => {
    setMessage(false);
  };
  const onLogout = () => {
    setShow(false);
  };
  return (
    <div className="app">
      <Nav show={show} onLogout={onLogout} />
      <section className="section">
        <Home
          onChangeShow={onChangeShow}
          setShow={!show}
          show={show}
          output={message.output}
          title={message.title}
          message={message}
          onRemoveMessage={onRemoveMessage}
        />
      </section>
    </div>
  );
};

export default App;
