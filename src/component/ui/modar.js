import Button from "./button";
import React from "react";
import ModarStyle from "./uistyles/modar.style.module.css";

const Modar = (props) => {
  const { output, title, onRemoveMessage } = props;
  return (
    <div className={ModarStyle.modar}>
      <div className={ModarStyle.wrapper}>
        <h4 className={ModarStyle.h4}>Title</h4>
        <span className="md:text-2xl md:mb-4 font-serif text-white">
          {title}
        </span>
        <h5 className={ModarStyle.h5}>Message</h5>
        <p className="md:text-1xl font-serif text-white">{output}</p>
        <Button
          className="mt-2 bg-purple-900/95 text-white w-[80px] py-1 rounded-sm"
          onClick={onRemoveMessage}
        >
          okay
        </Button>
      </div>
    </div>
  );
};

export default Modar;
