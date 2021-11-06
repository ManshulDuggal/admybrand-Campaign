import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import  ShotsSlide from '../ShotsSlide/ShotsSlide';
import SwiperCore, { Pagination } from "swiper";
SwiperCore.use([Pagination]);

const ShotsCarousel = () => {
    return (
        <div className="flex">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className="marketingShotsSwiperCarousel"
        >
          {[0, 1,2,3].map((item,index) => (
            <SwiperSlide key={index}>
              <ShotsSlide/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
}
export default ShotsCarousel;