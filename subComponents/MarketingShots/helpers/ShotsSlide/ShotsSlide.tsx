import React from "react";
import Image from "next/image";
import { svgs } from "../../../../constants/icons/icons";
import styles from "../../../../styles/feed.module.scss";
import localStyles from "./ShotsSlide.module.scss";

const ShotsSlide = () => {
  return (
    <div className={localStyles.wrapper}>
      <div className={localStyles.secondaryWrapper}>
      <img
        src={`/assets/images/marketing_shots.png`}
        className="w-full"
      />
      <div className={localStyles.iconBtnWrapper}>
      <button className={localStyles.iconBtn}>
        <Image
          src={svgs.shareIcon}
          width={24}
          height={24}
          objectFit="contain"
          quality={100}
        />
      </button>
      <button className={`${localStyles.iconBtn} right-10`}>
        <Image
          src={svgs.shotsSave}
          width={24}
          height={24}
          objectFit="contain"
          quality={100}
        />
      </button>
      </div>
      </div>
      <h1
        className={styles.headingDark}
      >{`Netflix appoints Swiggy's Srivats TS as VP- Marketing`}</h1>
      <p
        className={styles.textLight}
      >{`Urban living results in some unique marketing opportunities you won’t find elsewhere. Use creativity to capitalize on these opportunities. Urban living results in some unique marketing opportunities you won’t find elsewhere. Use creativity to capitalize on these opportunities.`}</p>
    </div>
  );
};
export default ShotsSlide;
