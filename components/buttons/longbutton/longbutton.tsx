import React from "react";
import styles from "./styles/longbutton.module.scss";

interface props {
  children?: React.ReactNode;
}

const Longbutton = ({ children }: props) => {
  return <div className={styles.longbuttonwrapper}>{children}</div>;
};

export default Longbutton;
