import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./adagencytab.module.scss";
import { adagencytab } from "../../../constants/api/api";
import Image from "next/image";
import AdAgencyBar from "./helpers/adagencybar";

interface Leftheadingprops {
  key: string;
  name: string;
  image: any;
  selected: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const AdAgencyTabs = () => {
  const [data, setData] = React.useState(adagencytab);
  const [description, setDescription] = useState(0); // to store present tab index
  const [tab, settab] = useState(0); // to store previous tab index

  // number of tabs between present and previos tab
  var i = description - tab;

  

  const Leftheading = ({
    key,
    name,
    image,
    selected,
    onClick,
  }: Leftheadingprops) => {
    if (name === 'Avail Credit')
      return (
        <div className={styles.leftitem} >
          <>
            <div >
              <Image
                src={image}
                height={56}
                width={56}
                objectFit={"contain"}
                alt="img"
              />
            </div>
            <h3 className={selected ? styles.active : styles.deactive}>
              {name}
            </h3>
          </>

          {selected && (
            <>
              <motion.div
                className={styles.underline}
                initial={i > 0 ? { x: -120 * i } : { x: 120 * -i }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
              ></motion.div>
              <div className={styles.underlinesmall}></div>
            </>
          )}
          
        </div>
      );
    else
      return (
        <div className={styles.leftitem} onClick={onClick}>
          <>
            <div>
              <Image
                src={image}
                height={56}
                width={56}
                objectFit={"contain"}
                alt="img"
              />
            </div>
            <h3 className={selected ? styles.active : styles.deactive}>
              {name}
            </h3>
          </>

          {selected && (
            <>
              <motion.div
                className={styles.underline}
                initial={i > 0 ? { x: -120 * i } : { x: 120 * -i }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
              ></motion.div>
              <div className={styles.underlinesmall}></div>
            </>
          )}
        </div>
      );
  };

  const clickHandler = (item: object, index: number) => {
    console.log(index);
    setDescription(index);
    if (index < 3) {
      let dummy = [...data];
      dummy.forEach((i, _) => {
        if (_ === index) {
          i.selected = true;
        } else {
          i.selected = false;
        }
      });

      setData(dummy);
    }
    {
      settab(description);
    }
  };

  return (
    <React.Fragment>
      <div className={styles.main}>
        <div className={styles.innercontainer}>
          <div className={styles.leftcontainer}>
            {data.map((i, index) => {
              {
                return (
                  <Leftheading
                    onClick={() => clickHandler(i, index)}
                    key={i.key}
                    selected={i.selected}
                    name={i.name}
                    image={i.image}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
      <AdAgencyBar index={description} />
    </React.Fragment>
  );
};

export default AdAgencyTabs;
