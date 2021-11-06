import React from "react";
import classes from "./style/headercard.module.scss";

interface props {
  children?: React.ReactNode;
  customstyle?: string;
  type?: boolean;
}

const Headercard = ({ type, children, customstyle }: props) => {
  return (
    <section
      className={`${
        type ? classes.main : classes.mainSearchPage
      } ${customstyle}`}
    >
      {children}
    </section>
  );
};

export default Headercard;
