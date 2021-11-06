import React from "react";
import styles from "../privatescrollcomponent/styles/privatescrollcomponent.module.scss";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { brandsscroll } from "../../../constants/api/adagency";
import Image from 'next/image';

const Brandscrollcomponent = () => {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

  return (
    <div className={styles.privatemainwraper}>
      <Swiper        
        spaceBetween={30}
        slidesPerView={"auto"}
        loop={true}
        fadeEffect={{ crossFade: true }}
        navigation
      >
        {brandsscroll.map((item, index) => {
          return (
            <SwiperSlide virtualIndex={index} key={index}>
              <Image src={item.image} width={200} height={90} alt='img'/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Brandscrollcomponent;
