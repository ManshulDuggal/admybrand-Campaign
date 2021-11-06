import React from "react";
import styles from "./PopulationHover.module.scss";

const densityData: { colors: string; density: string }[] = [
  { colors: "#0e1ad8", density: "Null" },
  { colors: "#3677f9", density: "< 1" },
  { colors: "#00dbef", density: "1 - 10" },
  { colors: "#02e5f8", density: "11 - 50" },
  { colors: "#09ba5f", density: "51 - 100" },
  { colors: "#06db0d", density: "101 - 250" },
  { colors: "#e1df2a", density: "251 - 5000" },
  { colors: "#efb509", density: "5000 - 7500" },
  { colors: "#f3720d", density: "7501 - 10000" },
  { colors: "#e04006", density: "10001 - 20000" },
  { colors: "#fc0c0d", density: "> 20000" },
];
export const PopulationHoverContent = densityData.map((data, index) => (
  <div key={index} className={styles.hoverContent}>
    <div style={{ backgroundColor: `${data.colors}` }}></div>
    <span>{data.density}</span>
  </div>
));
