import Image from "next/image";
import React from "react";
import { icons } from "../../../constants/icons/icons";
import styles from "./styles/scrollfour.module.scss";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { mediaowner } from "../../../constants/api/api";
import Imagecard from "../../cards/smallimagecard/imagecard";

const Itemcard = ({ src, name }: { src: string; name: string }) => {
  return (
    <div className={styles.itemcontainer}>
      <Imagecard src={src} />
      <div className={styles.names}>
        <h3 className={styles.nametext}>{name}</h3>
      </div>
    </div>
  );
};

interface props {
  onLeft?: React.MouseEventHandler<HTMLDivElement> | undefined;
  onRight?: React.MouseEventHandler<HTMLDivElement> | undefined;
  name: string;
  id?: string;
}
const breakpoints = {
  100: {
    slidesslidesPerView: 3,
    width: 250,
    spaceBetween: 2,
  },
  // when window width is >= 768px
  768: {
    slidesslidesPerView: 4,
    width: 250,
    spaceBetween: 40,
  },
};

const Scrollfour = ({ onLeft, onRight, name, id }: props) => {
  
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

  return (
    <div id={id} className={styles.scrollfourwrapper}>
      <div className={styles.scrollfourcontainer}>
        <div className={styles.scrollfourtopcontainer}>
          <div className={styles.scrollfourleftcontainer}>
            <h2 className={styles.scrollfourheading}>{name}</h2>
          </div>
          <div className={styles.scrollfourrightcontainer}>
            <h3 className={styles.scrollfourlink}>{"View all"}</h3>
          </div>
        </div>
        <div className={styles.scrollfourbottomcontainer}>
          <div className={styles.scrollfourbottomleftcontainer}>
            <div
              onClick={onLeft}
              className={styles.scrollfourbottomcontainerbtn}
            >
              <Image
                src={icons.leftbtnarrow}
                height={40}
                width={40}
                objectFit={"contain"}
                alt="img"
              />
            </div>
          </div>
          <div className={styles.scrollfourbottommidcontainer}>
            <div className={styles.scrollwrapper}>
              <Swiper breakpoints={breakpoints} loop={true} navigation>
                {mediaowner.map((item, index) => {
                  return (
                    <SwiperSlide key={index} virtualIndex={index}>
                      <Itemcard name={item.name} src={item.image} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          <div className={styles.scrollfourbottomrightcontainer}>
            <div
              onClick={onRight}
              className={styles.scrollfourbottomcontainerbtn}
            >
              <Image
                src={icons.rightbtnarrow}
                height={40}
                width={40}
                objectFit={"contain"}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scrollfour;
