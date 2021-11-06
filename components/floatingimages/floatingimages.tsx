import React from "react";
import Image from "next/image";
import styles from "./floatingimages.module.scss";
import { floatingimage } from "../../constants/api/api";

const FloatingImages = () => {
  return (
    <React.Fragment>
      <div className={styles.maincontainer}>
        
        <div className="lg:h-44">
          {floatingimage.map((component) => (            
            <div
              key={component.key}
              className={`${component.style} ${styles.logo} hidden lg:block`}
            >
              <Image src={component.image} height={120} width={120} alt="img" />
            </div>
           
          ))}          
        </div>
      </div>
      <div className={styles.scroll}>
      {floatingimage.map((component) => (            
            <div
              key={component.key}
              className={` ${styles.smallimg} mx-6 lg:hidden`}
            >
              <Image src={component.image} height={120} width={120} alt="image" />
            </div>           
          ))}
      </div>
    </React.Fragment>
  );
};

export default FloatingImages;
