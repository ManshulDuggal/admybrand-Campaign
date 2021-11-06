import Image, { ImageProps } from "next/image";
import React from "react";
import { useDimentions } from "../../../customhooks/customhooks";
import classes from "./styles/logostyles.module.scss";
interface props {
  imagesrc?: string;
  imageprops?: any;
  imagealt?: string;
  customstyle?: string;
  onclick?: React.MouseEventHandler<HTMLElement>;
}

const Homelogo = ({
  imageprops,
  imagesrc,
  imagealt,
  onclick,
  customstyle,
}: props) => {
  const [height, width] = useDimentions();

  return (
    <section onClick={onclick} className={`${classes.homelogo} ${customstyle}`}>
      <Image
        src={imagesrc}
        height={54}
        width={width >= 1065 ? 180 : 134}
        alt={imagealt}
        objectFit={"fill"}
        {...imageprops}
      />
    </section>
  );
};
export default Homelogo;
