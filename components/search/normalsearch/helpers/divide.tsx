import React from "react";
import styles from "./../../normalsearchouter/styles/normalsearchouter.module.scss";
interface props {
  customstyles?: string;
}

const Divide = ({ customstyles }: props) => {
  return (
    <div className={styles.dividex}>
      <div className={`${customstyles}`}></div>
    </div>
  );
};

export default Divide;
