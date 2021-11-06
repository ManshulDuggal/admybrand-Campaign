import Image from "next/image";
import React from "react";
import styles from "./styles/tvimage.module.scss";

interface props {
  src: string;
}

const Tvsmallcard = ({ src }: props) => {
  return (
    <>
      <div className={styles.tvsmallcardwrapper}>
        <Image
          src={src}
          height={30}
          width={220}
          objectFit={"contain"}
          alt="img1"
        />
      </div>
      <div className={styles.tvsmallmobilecardwrapper}></div>
    </>
  );
};

export default Tvsmallcard;
