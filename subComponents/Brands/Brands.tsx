import React from "react";
import { useRouter } from "next/router";
import { brandarealinks } from "../../constants/api/adagency";
import { svgs } from "../../constants/icons/icons";
import Brandscrollcomponent from "../../components/scrollcomponents/brandsscroll/brandsscroll";
import styles from "./Brands.module.scss";
import ArrowWithBackground from "../../elements/ArrowWithBackground";

const Brands = () => {
  const router = useRouter();
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

  const onclicklink = (link: string) => {
    router.push(link);
  };

  return (
    <div className={styles.privatecomponentwrapper}>
      <div className="flex justify-center">
        <p className="font-pops text-secondary m-6 text-center">
          We empower and helps in advertising for thousands of well known brands
          which you use in your day to day life
        </p>
      </div>

      <div id={"privateone"}>
        <Brandscrollcomponent />
      </div>

      <div className={`flex justify-center`}>
        <ArrowWithBackground
          onclick={() => onclick("Left")}
          className={styles.leftbtn}
          svgsIcon={svgs.circlearrow}
        />
        <ArrowWithBackground
          onclick={() => onclick("Right")}
          className={styles.rightbtn}
          svgsIcon={svgs.circlearrow}
        />
      </div>
      
      <div className="md:flex justify-between p-10">
        {brandarealinks.map((item) => (
          <h1
            key={item.key}
            className={styles.link}
            onClick={() => onclicklink(item.link)}
          >
            {item.text}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Brands;
