import React from "react";
import Image from "next/image";
import { icons } from "../../../constants/icons/icons";
import styles from "./consultationarea.module.scss";
import InnnerContainer from "./helpers/innercontainer";

const ConsultationArea = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className="flex">
          <h1 className={styles.barcode}>Barcode</h1>
          <div className="mt-1">
            <Image src={icons.amb_spesh} width={150} height={20} alt="image" />
          </div>
        </div>
        <div>
          <p className={styles.detail}>
            Experience our tech enabled Ad agency with power of analytics and
            tools while providing same personal experience as your regular Ad
            agency button: Get Callback 24X7
          </p>
        </div>
        <button className={styles.button}>
          <h1 className="text-white font-pops">Get Callback 24X7 →</h1>
        </button>
        <p className={styles.text}>
          Brands with turnover &gt; 12crore are eligible for Free
        </p>
      </div>
      <InnnerContainer />
    </div>
  );
};

export default ConsultationArea;
