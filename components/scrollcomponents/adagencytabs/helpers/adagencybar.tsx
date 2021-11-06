import React from "react";
import styles from "../../../../styles/adagency.module.scss";
import Image from "next/image";
import { icons } from "../../../../constants/icons/icons";

interface Props {
  index: number;
}

const AdAgencyBar = ({ index }: Props) => {
  if (index === 0)
    return (
      <div className={`${styles.barcontainer} flex-col lg:flex-row`}>
        <h3 className={styles.barcontainertext }>
          Consult with the professionals, 24x7
        </h3>
        <h3 className={styles.barcontainerbutton}>Start Consultation →</h3>
      </div>
    );
  else if (index === 1)
    return (
      <div className={styles.barcontainer}>
        <div className="hidden md:flex  h-full ">
          <div className={styles.containerone}>
            <h3 className={styles.bartext}>Location</h3>
            <input
              className={styles.inputbox}
              placeholder="Select location ˅"
            ></input>
          </div>
          <div className={styles.divider} />

          <div className={styles.pincodecontainer}>
            <h3 className={styles.bartext}>Pincode</h3>
            <input
              className={`${styles.inputbox} ${styles.extra} `}
              placeholder="Enter pincode, let’s see if we operate in your area"
            ></input>
          </div>
        </div>
        <div className={styles.searchimg}>
          <Image src={icons.searchone} height={28} width={28} alt="search" />
        </div>
      </div>
    );
  else if (index === 2)
    return (
      <div className={styles.barcontainer}>
        <div className={styles.innercontainer}>
          <div className={styles.containerone}>
            <h3 className={styles.bartext}>Location</h3>
            <input
              className={styles.inputbox}
              placeholder="Select location ˅"
            ></input>
          </div>
          <div className={styles.divider} />

          <div className={`${styles.pincodecontainer} ${styles.p}`}>
            <h3 className={styles.bartext}>Services</h3>
            <input
              className={styles.inputbox}
              placeholder="Select services"
            ></input>
          </div>
        </div>
        <div className={styles.searchimg}>
          <Image src={icons.searchone} height={28} width={28} alt="search" />
        </div>
      </div>
    );
    else if (index > 2)
    return (
      <div className='h-44' />       
    );   
  else return <div />;
};
export default AdAgencyBar;
