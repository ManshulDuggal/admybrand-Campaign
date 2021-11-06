import Image from "next/image";
import React from "react";
import { bannerData } from "../../../constants/api/api";
import styles from "./styles/largeimagecard.module.scss";

const Largeimagecard = ({ src }: { src: string }) => {
  return (
    <>
      <div className={styles.largeimagecardcontainer}>
        <Image
          src={bannerData['lg']}
          layout={"fill"}
          objectFit={"contain"}
          alt="img"
        />
      </div>
    </>
  );
};

export default Largeimagecard;
