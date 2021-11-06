import Image from "next/image";
import React from "react";
import styles from "./styles/tvimage.module.scss";

interface props {
  src: string;
}

const Tvimagecard = ({ src }: props) => {
  return (
    <>
      <div className={styles.tvimagecardwrapper}>
        <Image
          src={src}
          height={30}
          width={200}
          objectFit={"contain"}
          alt="img1"
        />
      </div>
    </>
  );
};

export default Tvimagecard;
