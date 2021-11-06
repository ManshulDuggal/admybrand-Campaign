import Image from "next/image";
import React from "react";
import styles from "./styles/imagecard.module.scss";

interface props {
  src: string;
}
const imgLoader = ({ src }: props) => {
  return src;
};
const Imagecard = ({ src }: props) => {
  return (
    <>
      <div className={styles.imagecardwrapper}>
        <Image
          loader={imgLoader}
          src={src}
          height={329}
          width={270}
          objectFit={"cover"}
          alt="img1"
        />
      </div>
      <div className={styles.imagemobilecardwrapper}>
        <Image
          loader={imgLoader}
          src={src}
          height={279}
          width={224}
          objectFit={"cover"}
          alt="img2"
        />
      </div>
    </>
  );
};

export default Imagecard;
