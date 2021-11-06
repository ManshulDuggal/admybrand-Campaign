import Image from "next/image";
import React from "react";
import classes from "./styles/btnstyles.module.scss";

interface props {
  customiconbtnstyles?: string;
  children?: React.ReactNode;
  imagesrc?: string;
  imagealt?: string;
  imageprops?: any;
  onclick?: React.MouseEventHandler<HTMLDivElement>;
  objectfit?: any;
}

const Iconsbtn = ({
  customiconbtnstyles,
  children,
  imagesrc,
  imagealt,
  imageprops,
  onclick,
  objectfit,
}: props) => {
  if (imagesrc) {
    return (
      <div
        onClick={onclick}
        className={`${classes.iconbtn} ${customiconbtnstyles}`}
      >
        <Image
          src={imagesrc}
          height={18}
          width={18}
          objectFit={objectfit ? objectfit : "contain"}
          alt={imagealt}
          {...imageprops}
        />
      </div>
    );
  } else {
    return (
      <div className={`${classes.iconbtn} ${customiconbtnstyles}`}>
        {children}
      </div>
    );
  }
};

export default Iconsbtn;
