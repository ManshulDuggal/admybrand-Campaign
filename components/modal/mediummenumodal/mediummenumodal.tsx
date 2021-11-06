import React from "react";
import styles from "./styles/mediumenumodal.module.scss";

interface props {
  customclass?: string;
  children?: React.ReactNode;
}

const Mediummenumodal = ({ customclass, children }: props) => {
  return (
    <div className={`${styles.mainmediummodalcontainer} ${customclass}`}>
      {children}
    </div>
  );
};

export default Mediummenumodal;
