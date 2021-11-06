import React from "react";
import { svgs } from "../../../../constants/icons/icons";
import { useDimentions } from "../../../../customhooks/customhooks";
import Iconsbtn from "../../buttons/iconsbtn";
import classes from "./headersearch.module.scss";

const Headersearch = () => {
  const [height, width] = useDimentions();

  const searchobj = {
    height: 20,
    width: 20,
    src: svgs.homesearchicon,
  };
  return (
    <section className={classes.headersearchmainwrapper}>
      <input
        className={classes.inputtext}
        placeholder={"Search across ADmyBRAND"}
      />
      <Iconsbtn
        imagesrc={svgs.homesearchicon}
        objectfit={"fill"}
        imagealt={"header search"}
        customiconbtnstyles={`${
          width >= 1065
            ? classes.headersearchicon
            : classes.headersearchiconmobile
        }`}
        imageprops={searchobj}
      />
    </section>
  );
};

export default Headersearch;
