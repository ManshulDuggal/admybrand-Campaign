import React from "react";
import classes from "./styles/btnstyles.module.scss";

interface props {
  text?: string;
  children?: React.ReactNode;
  customstylebtn?: string;
  customstylelabel?: string;
  onclick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Mediumbtn = ({
  text,
  children,
  customstylebtn,
  customstylelabel,
  onclick,
}: props) => {
  if (text) {
    return (
      <button
        onClick={onclick}
        className={`${classes.mediumbtn} ${customstylebtn}`}
      >
        <label className={`${classes.mediumbtntext} ${customstylelabel}`}>
          {text}
        </label>
      </button>
    );
  }

  return (
    <button
      onClick={onclick}
      className={`${classes.mediumbtn} ${customstylebtn}`}
    >
      {children}
    </button>
  );
};

export default Mediumbtn;
