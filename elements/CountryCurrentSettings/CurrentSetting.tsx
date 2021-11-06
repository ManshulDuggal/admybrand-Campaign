/**
 * @author Rishi Raj
 * @email rishi@snaphy.com
 * @create date 2021-10-19 15:30:59
 * @modify date 2021-10-19 15:30:59
 * @desc [description]
 */
 import React from "react";
 import styles from "./../../styles/modal.module.scss";
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