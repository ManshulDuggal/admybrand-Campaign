import React from "react";
import styles from "./styles/shortmenumodal.module.scss";

interface props {
  children: React.ReactNode;
  style?: string | undefined;
}

const Shortmenumodal = ({ children, style }: props) => {
  return (
    <div className={`${styles.shortmenumainwrapper} ${style}`}>{children}</div>
  );
};

export default Shortmenumodal;
