import Image from "next/image";
import React from "react";
import { icons } from "../../constants/icons/icons";
import Privatescrollcomponent from "../scrollcomponents/privatescrollcomponent/privatescrollcomponent";
import styles from "./styles/privatecomponent.module.scss";

const Privatecomponent = () => {
  const onclick = (type) => {
    if (type === "Left") {
      const getBtn: any = document.querySelector(
        "#privateone .swiper-button-prev"
      );
      getBtn.click();
    } else {
      
      const getBtn: any = document.querySelector(
        "#privateone .swiper-button-next"
      );
      getBtn.click();
    }
  };

  return (
    <div className={styles.privatecomponentwrapper}>
      <div className={styles.privateinternalcomponentwrapper}>
        <div className={styles.leftcontainer}>
          <div className={styles.topcontainer}>
            <h2 className={styles.topcontainertext}>Private Labels</h2>
          </div>
          <div className={styles.midcontainer}>
            <h3 className={styles.midcontainertext}>
              <p>{`We also sell ads under our private labels.`}</p>
              <p className="pt-2">
                {`Ad space sellers
              who don't have their own `}
                <strong>{`Inventory Management `}</strong>{" "}
                {`Solution can
              register to these portals and can choose to sell ads under our
              private label, their own brand name or sell anonymously.
              Advertisers who are looking for premium analytics and`}
                <strong>{` Campaign
              Management `}</strong>
                {`Solution can also log into these freemium portals with
              our Single-Sign-On.`}
              </p>
            </h3>
          </div>
          <div className={styles.bottomcontainer}>
            <div onClick={() => onclick("Left")} className={styles.arrowbtns}>
              <Image
                src={icons.privatearrowleft}
                height={24}
                width={24}
                objectFit={"contain"}
                alt="img"
              />
            </div>
            <div onClick={() => onclick("Right")} className={styles.arrowbtns}>
              <Image
                src={icons.privatearrowright}
                height={24}
                width={24}
                objectFit={"contain"}
                alt="img"
              />
            </div>
          </div>
        </div>
        <div className={styles.rightcontainer}>
          <div className={styles.rightinnercontainer}>
            <div className={styles.righttopcontainer}>
              {/* <h3 className={styles.link}>View all</h3> */}
            </div>
            <div id={"privateone"} className={styles.rightbottomcontainer}>
              <Privatescrollcomponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privatecomponent;
