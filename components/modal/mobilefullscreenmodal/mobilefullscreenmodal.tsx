import React from "react";
import styles from "./styles/mobilefullscreenmodal.module.scss";

interface props {
  children?: React.ReactNode;
  customstyles?: string;
}

const Mobilefullscreenmodal = ({ children, customstyles }: props) => {
  return (
    <div className={`${styles.mainmobilescreenmodal} ${customstyles}`}>
      {children}
    </div>
  );
};

export default Mobilefullscreenmodal;
