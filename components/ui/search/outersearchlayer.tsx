import React from "react";
import classes from "./searchstyles.module.scss";
interface props {
  children?: React.ReactNode;
  customstyles?: string;
}

const Outersearchlayer = ({ children, customstyles }: props) => {
  return (
    <section
      className={
        customstyles
          ? `${classes.searchwrapper + customstyles}`
          : classes.searchwrapper
      }
    >
      {children}
    </section>
  );
};

export default Outersearchlayer;
