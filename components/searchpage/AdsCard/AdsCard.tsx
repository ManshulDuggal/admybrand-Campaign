import React, { useState } from "react";
import Image from "next/image";
import PrimaryBtnWhite from "../../buttons/PrimaryBtnWhite";
import PrimaryBtn from "../../buttons/PrimaryBtn";
import SuccessBadge from "../../badges/SuccessBadge";
import PromotionBadge from "../../badges/PromotionBadge";
import DefaultBadge from "../../badges/DefaultBadge";
import ActionButtons from "../ActionButtons/ActionButtons";
import HiCheckCircle from "react-icons/hi";
import styles from "./adscard.module.scss";
import { myLoader } from "../../helpers/searchpage";
import PrimaryBtnWhiteSelected from "../../buttons/PrimaryBtnWhiteSelected";
interface props {
  heading: string;
  image: string;
  mobileMapView: boolean;
  cardposition: boolean;
  cardpositionShrink: boolean;
  mrpprice: string;
  finalprice: string;
  discount?: string | number;
  location?: string;
  type?: string | string[];
  promotion?: boolean;
  width?: string;
  height?: string;
}

const AdsCard = ({
  cardposition,
  cardpositionShrink,
  discount,
  location,
  heading,
  image,
  mrpprice,
  mobileMapView,
  finalprice,
  width,
  height,
  promotion,
  type,
}: props) => {
  const locationvg = "/assets/images/svg/locationsmall.svg";
  const [addtoplan, setAddtoplan] = useState(false);

  return (
    <div
      className={`${
        cardposition
          ? styles.adsCard
          : cardpositionShrink
          ? styles.noAdsCard
          : styles.adsCardLeft
      }`}
    >
      <div className={styles.imageContainer}>
        <Image
          height={171}
          width={332}
          src={image}
          loader={myLoader}
          alt="img"
          className={styles.adsCardImage}
        />
        {promotion && <PromotionBadge buttontext={"Promoted"} />}
      </div>
      <div className={styles.adsCardRight}>
        <div className={styles.adsCardHeadingClass}>
          <div className={styles.headingContainer}>
            <h2 className={styles.adsCardHeading}>{heading}</h2>

            <div className={styles.adsCardActionButton}>
              <ActionButtons />
            </div>
          </div>

          <div className={styles.adsCardLocation}>
            <Image src={locationvg} height="12" width="14" alt="img"/>
            <span className={styles.adsCardAddress}>{location}</span>
            <span className={styles.adsCardCategory}>{type}</span>
          </div>

          <div className={styles.adsCardDefaultBadge}>
            <DefaultBadge buttontext={"Fronlit"} />
            <span
              className={styles.adsCardDim}
            >{`${width}ft X ${height}ft`}</span>
          </div>
          <div className={styles.adsCardPrice}>
            <div className={styles.adsCardPriceTag}>
              ₹{finalprice} per sec
              <div className={styles.adsCardStrike}>{`₹ ${mrpprice}`}</div>
              <SuccessBadge buttontext={`${discount}% Off`} />
            </div>
          </div>
        </div>
        <div className={styles.adsCardButtonClass}>
          <div className={styles.adsCardButtonDiv} onClick={()=> setAddtoplan(!addtoplan)}>
            {!addtoplan? <PrimaryBtnWhite buttontext={"Add To Plan"} />: <PrimaryBtnWhiteSelected buttontext={"Added"}/>}
            
          </div>
          <div className={styles.adsCardButtonDiv}>
            <PrimaryBtn buttontext={"Book Now"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsCard;
