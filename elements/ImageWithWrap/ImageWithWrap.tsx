import React from "react";
import Image from "next/image";

interface Props {
    styles?: any;
    source: any;
    width: number;
    height: number;
}

const ImageWithWrap = ({styles, source, width, height}: Props) => {
    return (
        <div className={styles}>
              <Image
                src={source}
                width={width}
                height={height}
                alt="img"
                objectFit={"contain"}
                quality={100}
              />
            </div>
    )
}

export default ImageWithWrap;