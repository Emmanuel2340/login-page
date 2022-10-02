import React, { useState } from "react";
import HomeStyle from "../styles/HomeStyle.module.css";
import Modar from "../ui/modar";
import Login from "./login";
const Home = (props) => {
  const [receive, setReceive] = useState();
  const { onChangeShow, show, message, output, title, onRemoveMessage } = props;
  const onReceiveName = (name) => {
    setReceive(name);
  };
  return (
    <div className={HomeStyle.Home}>
      {show && (
        <h1 className="text-center my-10">{`Welcome ${receive} how may i help you?`}</h1>
      )}

      {!show && (
        <Login onChangeShow={onChangeShow} onReceiveName={onReceiveName} />
      )}

      {message && (
        <Modar
          output={output}
          title={title}
          message={message}
          onRemoveMessage={onRemoveMessage}
        />
      )}
    </div>
  );
};

export default Home;
