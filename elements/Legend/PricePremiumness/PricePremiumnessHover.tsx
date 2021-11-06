import React from "react";
import styles from "../Population/PopulationHover/PopulationHover.module.scss";

const densityData: { colors: string; priceIndex: string }[] = [
  { colors: "#0e1ad8", priceIndex: "00 - 09" },
  { colors: "#3677f9", priceIndex: "10 - 19" },
  { colors: "#00dbef", priceIndex: "20 - 29" },
  { colors: "#02e5f8", priceIndex: "30 - 39" },
  { colors: "#09ba5f", priceIndex: "40 - 49" },
  { colors: "#06db0d", priceIndex: "50 - 59" },
  { colors: "#e1df2a", priceIndex: "60 - 69" },
  { colors: "#efb509", priceIndex: "70 - 79" },
  { colors: "#f3720d", priceIndex: "80 - 89" },
  { colors: "#fc0c0d", priceIndex: "90 - 99" },
];
export const PriceHoverContent = densityData.map((data, index) => (
  <div key={index} className={styles.hoverContent}>
    <div style={{ backgroundColor: `${data.colors}` }}></div>
    <span>{data.priceIndex}</span>
  </div>
));
