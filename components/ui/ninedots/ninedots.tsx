/* eslint-disable react/jsx-no-target-blank */
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../../Header/Header";
import Headersearch from "../containers/headersearch/headersearch";
import { ninedots } from "../../../constants/api/api";
import { svgs } from "../../../constants/icons/icons";
import classes from "./styles/ninedots.module.scss";
interface Props {
  toggleNineDots(arg: Object): void;
}
const Ninedots: React.FC<Props> = (props) => {

  // const [state, setState] = useState(true);

  return (
    <motion.section
      className={classes.main}
      initial={{ translateY: -1000 }}
      animate={{ translateY: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Header type={true} >
        <Headersearch />
      </Header>
      <section className={classes.scrollLayout}>
        {ninedots.map((parentItem) => (
          
          <div key={Math.random()} className={classes.categorySection}>
            <h1 className={classes.categoryHeading}>{parentItem.heading}</h1>
            <div className={classes.categoryGrid}>
              {parentItem.innerdata.map((item) => (
                <a href={item.url} target="_blank" key={item.key} className={classes.categoryCard}>
                  <Image src={item.image} width={100} height={66} alt='image'/>
                  <div className={classes.cardDescriptionContainer}>
                    <h1 className={classes.cardDescriptionHeading}>
                      {item.heading}
                    </h1>
                    <p className={classes.cardDescriptionPara}>
                      {item.discription}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>
      <section className={classes.sectionTogglerContainer}>
        <button
          className={classes.sectionToggler}
          onClick={() => props.toggleNineDots(false)}
        >
          <Image
            src={svgs.ninedots}
            width={22}
            height={22}
            objectFit={"cover"}
            alt='image'
          />
        </button>
      </section>
    </motion.section>
  );
};

export default Ninedots;
