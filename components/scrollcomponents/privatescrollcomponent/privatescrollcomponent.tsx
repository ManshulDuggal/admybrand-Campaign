import React from "react";
import styles from "./styles/privatescrollcomponent.module.scss";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { privatelableimages } from "../../../constants/api/api";
import Privatescrollcard from "../../cards/privatescrollcard/privatescrollcard";

const Privatescrollcomponent = () => {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

  return (
    <div className={styles.privatemainwraper}>
      <Swiper
        className={"w-full h-full pl-4 lg:pl-0"}
        spaceBetween={30}
        slidesPerView={"auto"}
        loop={true}
        fadeEffect={{ crossFade: true }}
        navigation
      >
        {privatelableimages.map((item, index) => {
          return (
            <SwiperSlide virtualIndex={index} key={index}>
              <Privatescrollcard
                description={item.description}
                heading={item.name}
                src={item.image}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Privatescrollcomponent;
