import Link from "next/link";
import React from "react";
import { mobilemenudata } from "../../../../constants/api/api";
import { svgs } from "../../../../constants/icons/icons";
import Iconsbtn from "../../../ui/buttons/iconsbtn";
import Mediumbtn from "../../../ui/buttons/mediumbtn";
import classes from "./style/mobilemenulogin.module.scss";

const Mobilemenuheader = () => {
  const rightarrowobj = {
    width: 24,
    height: 24,
    src: svgs.lightrightarrow,
  };

  return (
    <section className={classes.mobilemenuheader}>
      {mobilemenudata.map((item, index) => {
        return (
          <ul key={index} className={classes.ul}>
            {item.one.map((items, index) => {
              return (
                <li key={index} className={classes.li}>
                  <Link
                    href={`/${items.toLowerCase().replaceAll(" ", "")}`}
                    passHref
                  >
                    <section className={`${classes.itemwrapper}`}>
                      <label className={classes.label}>{items}</label>
                      <Iconsbtn
                        customiconbtnstyles={`${classes.icons}`}
                        imagesrc={svgs.lightrightarrow}
                        imagealt={"close"}
                        imageprops={rightarrowobj}
                      />
                    </section>
                  </Link>
                </li>
              );
            })}
          </ul>
        );
      })}
      <section className={classes.btnswrapper}>
        <Mediumbtn
          customstylebtn={`${classes.btn}`}
          customstylelabel={classes.btnlabel}
          text={"Login"}
        />
        <Mediumbtn
          customstylebtn={classes.btntwo}
          customstylelabel={`${classes.btnlabel}`}
          text={"Sign up"}
        />
      </section>
    </section>
  );
};

export default Mobilemenuheader;
