import React from "react";
import styles from "./styles/scrollfive.module.scss";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { bannerData } from "../../../constants/api/api";
import { svgs } from "../../../constants/icons/icons";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Scrollfive = () => {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  const onclick = (type) => {
    if (type === "Left") {
      const getbtn: any = document.querySelector(
        "#scrollfive .swiper-button-prev"
      );
      getbtn.click();
    } else {
      const getbtn: any = document.querySelector(
        "#scrollfive .swiper-button-next"
      );
      getbtn.click();
    }
  };

  return (
    <div id={"scrollfive"} className={styles.scrollfivewrapper}>
      <div className={styles.scrollfivetopcontainer}>
        <section
          onClick={() => onclick("Left")}
          className={styles.btnviewleft + " justify-start"}
        >
          <button className={styles.leftbtn}>
            <Image
              src={svgs.scrollarrow}
              width={24}
              height={24}
              alt={"scrollbannerleft"}
            />
          </button>
        </section>
        <section
          onClick={() => onclick("Right")}
          className={styles.btnviewright + " justify-end"}
        >
          <button className={styles.rightbtn}>
            <Image
              src={svgs.scrollarrow}
              width={24}
              height={24}
              alt={"scrollbannerright"}
            />
          </button>
        </section>
        <Swiper
          className={"w-full h-full md:h-54 lg:h-60"}
          slidesPerGroup={1}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
            waitForTransition: true,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={750}
          navigation
          // pagination={{
          //   clickable: true,
          //   bulletActiveClass: styles.bulletactive,
          //   bulletClass: `swiper-pagination-bullet ${styles.bulletclass}`,
          // }}
        >
          {bannerData.map((item, index) => {
            console.log("item",item.lg)
            return (
              <SwiperSlide key={index} virtualIndex={index}>
                <div className={styles.itemcontainer}>
                  <div
                    style={{ position: "relative" }}
                    className={styles.imagecontainermain}
                  >
                    <Image alt="Mountains" src={item.lg} layout="fill" quality={100}/>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className={styles.scrollfivebottomcontainer}></div>
    </div>
  );
};

export default Scrollfive;
