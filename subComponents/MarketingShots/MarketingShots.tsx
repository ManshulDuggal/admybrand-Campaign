import React from "react";
import Image from "next/image";
import RoundedBorderCard from "../../components/RoundedBorderCard/RoundedBorderCard";
import { svgs } from "../../constants/icons/icons";
import styles from "../../styles/feed.module.scss";
import localStyles from "./MarketingShots.module.scss";
import ShotsCarousel from "./helpers/ShotsCarousel/ShotsCarousel";

export const MarketingShots = () => {
  return (
    <RoundedBorderCard>
      <div className={localStyles.wrapper}>
        <div className={localStyles.headerWrapper}>
          <div className={localStyles.headingWrapper}>
            <Image src={svgs.book} width={24} height={24} />
            <h1 className={styles.headingDark}>{`Marketing Shots`}</h1>
          </div>
        </div>
        {/*  */}
        <ShotsCarousel/>
      </div>
    </RoundedBorderCard>
  );
};
