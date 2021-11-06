import Image from "next/image";
import React from "react";
import { svgs } from "../../constants/icons/icons";
import styles from "./styles/downloadapp.module.scss";

const DownloadApp = () => {
  return (
    <div className={styles.downloadappmain}>
      <div className={styles.heading}>
        <h3>Download the App</h3>
      </div>
      <div className={styles.downloadlinks}>
        <div className={styles.linksimg}>
          <Image
            src={svgs.googleplay}
            height={48}
            width={158}
            objectFit={"contain"}
            alt="img"
          />
        </div>
        <div className={styles.linksimg}>
          <Image
            src={svgs.appstore}
            height={48}
            width={158}
            objectFit={"contain"}
            alt="img2"
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
