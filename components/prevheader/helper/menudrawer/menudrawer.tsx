import Image from "next/image";
import React from "react";
import { menudata } from "../../../../constants/api/api";
import { icons } from "../../../../constants/icons/icons";
import Listdata from "../listdata/listdata";
import styles from "./styles/menudrawer.module.scss";

const Menudrawer = () => {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.header}>
        <div className={styles.mobilemenulogocontainer}>
          <Image
            src={icons.logomobile}
            height={18}
            width={118}
            objectFit={"fill"}
            alt="img"
          />
        </div>
        <button className={styles.mobileclose}>
          <Image
            src={"/assets/images/close.png"}
            height={24}
            width={24}
            alt="img"
          />
        </button>
      </div>
      <div className={styles.menubody}>
        {menudata.map((item, index) => {
          return <Listdata data={item} key={index} />;
        })}
        <div className={styles.logincontainer}>
          <div className={styles.loginbtn}>
            <h3 className={styles.logtext}>Login</h3>
          </div>
          <div className={styles.loginbtn}>
            <h3 className={styles.logtext}>Sign up</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menudrawer;
