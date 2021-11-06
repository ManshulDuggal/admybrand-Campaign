import React from "react";
import classes from "./models.module.scss";
interface props {
  children?: React.ReactNode;
  customstyles?: string;
}
const Fullscreenmodel = ({ children, customstyles }: props) => {
  return (
    <section className={`${classes.fullscreen} ${customstyles}`}>
      {children}
    </section>
  );
};

export default Fullscreenmodel;
