import React from "react";
import Image from "next/image";
import styles from "./creditarea.module.scss";
import { credit } from "../../../constants/api/adagency";

const CreditArea = ({ id }: { id?: string }) => {
  return (
    <div id={id} className={styles.container}>
      <h1 className={styles.heading}>Avail Credit</h1>
      <p className={styles.description}>
        We understand how important is marketing for brands and we faciliate
        credit for your ad campaigns to help you get more business
      </p>
      <div className={styles.containertwo}>
        {credit.map((item) => (
          <>
            <div key={item.key} className={styles.innercontainer}>
              <div className={styles.top}>
                <Image src={item.image} height={80} width={80} alt="img" />
                <h1 className={styles.arrow}>→</h1>
              </div>
              <h1 className={styles.subheading}>{item.subheading}</h1>
              <p className={styles.description}>{item.data}</p>
            </div>
            <div className={styles.containerthree}>
              <h1 className={styles.subheadingtwo}> {item.subheading} </h1>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default CreditArea;
