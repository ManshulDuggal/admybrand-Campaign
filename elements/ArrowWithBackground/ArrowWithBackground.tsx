/**
 * @author Rishi Raj
 * @email erishiraj@gmail.com
 * @create date 2021-09-21 19:47:01
 * @modify date 2021-09-21 19:47:01
 * @desc [description]
 */
import React from "react";
import Image from "next/image";
// Styles
import styles from './ArrowWithBackground.module.scss';

type ArrowWithBackground = {
  onclick?: any,
  className?: string,
  svgsIcon?: string
}
const ArrowWithBackground = (props: ArrowWithBackground) => {
  const { onclick, svgsIcon, className } = props;
  return (
    <div onClick={onclick} className={className}>
      <Image
        src={svgsIcon}
        height={60}
        width={60}
        objectFit={"contain"}
        alt="img"
      />
    </div>
  )
}
export default ArrowWithBackground;