import React from "react";
import Image from "next/image";
import styles from "./styles/secondaryfooter.module.scss";
import { data, button } from "./helper/api";
import { svgs } from "../../constants/icons/icons";

const SecondaryFooter = () => {
  return (
    <React.Fragment>
      <div className={styles.maincontainer}>
        <div className={styles.topcontainer}>
          <h1 className={styles.toptext}> We want to help you </h1>
          <div className={styles.gridcontainer}>
            {button.map((item,index) => (
              <div key={index} className={`${styles.topbutton} ${item.style}`}>
              {item.data}
            </div>
            ))}           
          </div>
          <h1 className={styles.toptext}>your advertisements</h1>
        </div>
        <div className={styles.middle}>
          <div className={styles.left}>
            <div className="my-4">
              <h1 className={styles.h1}>{data.heading1}</h1>
              <p className={styles.p}>{data.data1}</p>
            </div>
            <div className="my-4">
              <h1 className={styles.h1}>{data.heading2}</h1>
              <p className={styles.p}>{data.data2}</p>
            </div>
          </div>
          <div className={styles.right}>
            <div className="mb-6">
              <Image src={svgs.weblogotwo} alt="logo" width={170} height={26} />
            </div>
            <p className={styles.p}>{data.description}</p>
            <div className={styles.inputcontainer}>
              <input
                placeholder="Enter email to subscribe newsletter"
                className={styles.input}
              ></input>
              <div className={styles.subscribe}>
                <h1 className={styles.subtext}>Subscribe</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SecondaryFooter;
