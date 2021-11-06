import Image from "next/image";
import React,{useEffect,useState} from "react";
import { icons } from "../../../constants/icons/icons";
import styles from "./styles/scrollthree.module.scss";
// import Swiper core and required modules

import { Swiper, SwiperSlide } from "swiper/react";
import { hotdeals } from "../../../constants/api/api";
import Imagecard from "../../cards/smallimagecard/imagecard";

const Scrollthree = ({ id }: { id?: string }) => {
  const [offerData, setOfferData] = useState([])
  useEffect(()=>{
    fetch("https://staging-api.admybrand.com/offers")
    .then(res=>res.json())
    .then(data=>setOfferData(data))
    .catch(err=>console.log(err));
  },[]);
  const onRight = () => {
    const getBtn: any = document.querySelector(
      ".scrollthree_midcontainer__23CnK .swiper-button-next"
    );
    getBtn.click();
  };
  const onLeft = () => {
    const getBtn: any = document.querySelector(
      ".scrollthree_midcontainer__23CnK .swiper-button-prev"
    );
    getBtn.click();
  };
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
  return (
    <div id={id} className={styles.scrollthreemainwrapper}>
      <div className={styles.topcontainer}>
        <div className={styles.headingcontainer}>
          <h2 className={styles.headingcontainertext}>
            Discover Hot Deals for this Week
          </h2>
        </div>
        <div className={styles.linkcontainer}>
          <h3 className={styles.linkcontainertext}>View all</h3>
        </div>
      </div>
      <div className={styles.bottomcontainer}>
        <div onClick={() => onLeft()} className={styles.leftcontainer}>
          <Image
            className={"cursor-pointer"}
            src={icons.leftbtnarrow}
            height={40}
            width={40}
            objectFit={"contain"}
            alt="img"
          />
        </div>
        <div className={styles.midcontainer}>
          <Swiper loop={true} navigation breakpoints={breakpoints}>
            {offerData.map((item, index) => {
              return (
                <SwiperSlide key={index} virtualIndex={index}>
                  <div className={styles.scrollitem}>
                    <div className={styles.imagecontainer}>
                      <Imagecard src={item.offer_image} />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div onClick={() => onRight()} className={styles.rightcontainer}>
          <Image
            className={"cursor-pointer"}
            src={icons.rightbtnarrow}
            height={40}
            width={40}
            objectFit={"contain"}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Scrollthree;
