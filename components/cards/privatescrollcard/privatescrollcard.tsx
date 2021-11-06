import Image from "next/image";
import React from "react";
import styles from "./styles/privatescroll.module.scss";

interface props {
  src: string;
  heading: string;
  description: string;
}

const Privatescrollcard = ({ src, description, heading }: props) => {
  return (
    <div className={styles.privatescrollcardwrapper}>
      <div className={`${styles.privatescrolltop} `}>
        <Image
          src={src}
          height={210}
          width={260}
          objectFit={"cover"}
          alt="img"
        />
      </div>
      <div className={styles.privatescrollbottom}>
        <h2 className={styles.privateheading}>{heading}</h2>
        <div className={styles.privatedescription}>
          <h3 className={styles.privatedescriptiontext}>{description}</h3>
        </div>
      </div>
    </div>
  );
};

export default Privatescrollcard;
