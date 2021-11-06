import Image from "next/image";
import React from "react";
import Header from "../components/Header/Header";
import Headersearch from "../components/ui/containers/headersearch/headersearch";
import { ninedots } from "../constants/api/api";
import { svgs } from "../constants/icons/icons";
import classes from "../styles/ninedots.module.scss";

const Ninedots = () => {
  return (
    <section className={classes.main}>
      <Header>
        <Headersearch />
      </Header>
      {ninedots.map((item, index) => {
        return (
          <>
            <section key={item.key} className={classes.mainwrapper}>
              <label className={classes.mainlabel}>{item.heading}</label>
              <section className={classes.itemswrapper}>
                {item.innerdata.map((inneritem, innerindex) => {
                  return (
                    <section
                      key={inneritem.key}
                      className={classes.itemwrapper}
                    >
                      <section className={classes.imagewrapper}>
                        <Image
                          src={svgs.ninedotsdummy}
                          alt="ninedots"
                          width={70}
                          height={48}
                          objectFit={"contain"}
                          layout={"fixed"}
                        />
                      </section>
                      <section className={classes.imagecontentwrapper}>
                        <label className={classes.subheading}>
                          {inneritem.heading}
                        </label>
                        <label className={classes.discription}>
                          {inneritem.discription}
                        </label>
                      </section>
                    </section>
                  );
                })}
              </section>
            </section>
            {index !== ninedots.length - 1 && (
              <div className={"h-auto  w-full items-center px-9"}>
                <div className={classes.innerline}></div>
              </div>
            )}
          </>
        );
      })}
    </section>
  );
};

export default Ninedots;
