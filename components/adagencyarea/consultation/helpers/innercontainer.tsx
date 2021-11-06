import React from "react";
import styles from "../consultationarea.module.scss";
import Image from "next/image";
import { consultation } from "../../../../constants/api/api";

const InnnerContainer = () => {
  return (
    <>
      {consultation.map((component) => (
        <>
          <div className={`${component.style} hidden lg:block`}>
            <Image src={component.image} width={80} height={80} alt="img" />
            <h1 className={styles.heading}> {component.heading} </h1>
            <p className={styles.description}>{component.description}</p>
          </div>
          <div className={styles.containertwo}>
            <h1 className={styles.heading}> {component.heading} </h1>
          </div>
        </>
      ))}
    </>
  );
};

export default InnnerContainer;
