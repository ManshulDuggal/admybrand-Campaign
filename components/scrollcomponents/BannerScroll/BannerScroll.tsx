import React,{useEffect,useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { bannerData } from "../../../constants/api/api";
import localStyles from "./BannerScroll.module.scss";
SwiperCore.use([Navigation,Autoplay]);

const BannerScroll = () => {
    const [isSmallScreen,setSmallScreen] = useState(false);
    useEffect(() => {
        if(window.innerWidth <= 640){
            setSmallScreen(true);
        }else{
            setSmallScreen(false);
        }
    }, []);
  return (
    <div className={localStyles.wrapper}>
      <Swiper
        navigation={true}
        className="customSwiper"
        autoplay={{
          delay: 2000,
          waitForTransition: true,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {bannerData.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={isSmallScreen ? item.sm : item.lg} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default BannerScroll;
