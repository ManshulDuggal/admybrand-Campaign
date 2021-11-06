import React from "react";
import styles from "./HeatMaps.module.scss";

interface props {
  title: string;
  value: string;
  option: string;
}
const HeatMapsOptions = ({ title, value, option }: props) => {
  return (
    <div className={styles.mapControlDropDownElements}>
      <label className={styles.mapControlDropDownRadio}>
        <input
          type="radio"
          className={styles.mapRadio}
          name="radio-colors"
          checked={option === value}
          value={value}
        ></input>
        <span className={styles.mapControlDropDownTitle}>{title}</span>
      </label>
    </div>
  );
};

export default HeatMapsOptions;
