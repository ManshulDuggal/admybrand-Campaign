import React from "react";
import classes from "../searchstyles.module.scss";

interface props {
  customstyles?: string;
}

const Divide = ({ customstyles }: props) => {
  return (
    <div className={classes.dividex}>
      <div className={`${classes.dividexinner + " " + customstyles}`}></div>
    </div>
  );
};

export default Divide;
