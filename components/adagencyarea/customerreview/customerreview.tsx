import React from "react";
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
import styles from "./customerreview.module.scss";
import CustomerCard from "./helpers/card";
import ArrowWithBackground from '../../../elements/ArrowWithBackground/ArrowWithBackground'

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);

const CustomerReview = () => {
  
  
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
  
 
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
              <ArrowWithBackground svgsIcon={svgs.circlearrow}/>
            </button>
          </section>
          <section
            onClick={() => onclick("Right")}
            className={styles.btnviewright + " justify-end"}
          >
            <button className={styles.rightbtn}>
              <Image
                src={svgs.circlearrow}
                width={60}
                height={60}
                alt={"scrollbannerright"}
              />
            </button>
          </section>
          <Swiper
            className={"w-full h-full"}
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
            pagination={{
              clickable: true,
              bulletActiveClass: styles.bulletactive,
              bulletClass: `swiper-pagination-bullet ${styles.bulletclass}`,
            }}
          >
            {bannerData.map((item, index) => {
              return (
                <SwiperSlide key={index} virtualIndex={index}>
                  <CustomerCard />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        
      </div>
    );
  };
   

export default CustomerReview 