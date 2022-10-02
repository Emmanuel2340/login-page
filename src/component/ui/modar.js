import Button from "./button";
import React from "react";

const Modar = (props) => {
  const { output, title, onRemoveMessage } = props;
  return (
    <div className="">
      <div className="flex flex-col items-center h-[200px] w-[530px]  absolute top-[25%] left-[29%]  rounded-md bg-purple-500 text-white">
        <h1
          style={{
            marginBottom: "2rem",
            marginTop: "1rem",
            fontSize: "2rem",
          }}
        >
          {title}
        </h1>
        <p>{output}</p>
        <Button
          className="mt-2 bg-purple-900/95 w-[80px] py-1 rounded-sm"
          onClick={onRemoveMessage}
        >
          okey
        </Button>
      </div>
    </div>
  );
};

export default Modar;
