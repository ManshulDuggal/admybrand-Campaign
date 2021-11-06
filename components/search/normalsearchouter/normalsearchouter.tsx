import React from "react";
import styles from "./styles/normalsearchouter.module.scss";

interface props {
  children?: React.ReactNode;
}

const Normalsearchouter = ({ children }: props) => {
  return (
    <section className={styles.searchoutermain}>
      <section className={`${styles.searchoutermainwrapper}`}>
        {children}
      </section>
    </section>
  );
};

export default Normalsearchouter;
