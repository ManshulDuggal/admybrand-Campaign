import React from "react";
import Image from "next/image";
import { svgs } from "../../../constants/icons/icons";
import styles from "./designcenter.module.scss";
import { designcenter } from "../../../constants/api/adagency";

const DesignCenter = () => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={`${styles.innercontainer} bg-primary-design`}>
          <h1 className={`${styles.heading} text-primary`}>
            {designcenter.heading1}
          </h1>
          <div className="flex ">
            <div>
              <p className={styles.para}>{designcenter.data1}</p>
              <p className={styles.para}>{designcenter.data2}</p>
              <p className={styles.link}>
                Visit Learning Centre or download App &gt;
              </p>
            </div>
            <div className={styles.image}>
              <Image src={svgs.demo} height={300} width={273} alt='image'/>
            </div>
          </div>
        </div>
        <div className={`${styles.innercontainer} bg-primary-lightpink`}>
          <h1 className={`${styles.heading} text-secondary`}>
            {designcenter.heading2}
          </h1>
          <div className="flex ">
            <div>
              <p className={styles.para}>{designcenter.data3}</p>
              <p className={styles.para}>{designcenter.data4}</p>
              <p className={styles.link}>
                Visit Design Centre or download App &gt;
              </p>
            </div>
            <div className={styles.image}>
              <Image src={svgs.demotwo} height={300} width={273}  alt='demo' />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DesignCenter;
