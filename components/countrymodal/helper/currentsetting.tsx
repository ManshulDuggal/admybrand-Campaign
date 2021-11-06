import React from "react";
import styles from "./../../../styles/modal.module.scss";
interface props {
  value: string;
  heading: string;
}

const CurrentSetting = ({ value, heading }: props) => {
  return (
    <div className={styles.suggestedElements}>
      <span className={styles.suggestedElementsHeading}>{value}</span>
      <span className={styles.suggestedElementsCategory}>{heading}</span>
    </div>
  );
};

export default CurrentSetting;
