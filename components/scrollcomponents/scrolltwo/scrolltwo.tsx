import React, { useState } from "react";
import { motion } from "framer-motion";

import styles from "./styles/scrolltwo.module.scss";
import { searchheader } from "../../../constants/api/api";
import Description from "../../description/description";

interface Leftheadingprops {
  name: string;
  selected: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

interface props {
  setState?: React.Dispatch<React.SetStateAction<number>>;
}

const Scrolltwo = ({ setState }: props) => {
  const [data, setData] = React.useState(searchheader);
  const [more, setMore] = React.useState(true);
  const [description, setDescription] = useState(0); // to store present tab index
  const [tab, settab] = useState(0); // to store previous tab index

  // number of tabs between present and previos tab
  var i = description - tab;

  const Leftheading = ({ name, selected, onClick }: Leftheadingprops) => {
    return (
      <div className={styles.leftitem} onClick={onClick}>
        {name === "More" ? (
          <h3 className={selected ? styles.active : styles.deactive}>
            {" "}
            &#x22EE; {`${name}`}
          </h3>
        ) : (
          <h3
            className={selected ? styles.active : styles.deactive}
          >{`${name}`}</h3>
        )}
        {selected && (
          <motion.div
            className={styles.underline}
            initial={i > 0 ? { x: -150 * i } : { x: 150 * -i }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        )}
      </div>
    );
  };

  const clickHandler = (item: object, index: number) => {
    console.log(index);
    setDescription(index);
    if (index !== 3) {
      let dummy = [...data];
      dummy.forEach((i, _) => {
        if (_ === index) {
          i.selected = true;
        } else {
          i.selected = false;
        }
      });

      setData(dummy);
      setState(index);
    } else {
      setMore(!more);
    }
    {
      settab(description);
    }
  };
  return (
    <React.Fragment>
      <div className={styles.main}>
        <div className={`${styles.innercontainer}`}>
          <div
            className={`${
              more ? styles.leftcontainer : styles.leftcontainerfull
            }`}
          >
            {data.map((i, index) => {
              if (index! < 4 && more !== false) {
                return (
                  <Leftheading
                    onClick={() => clickHandler(i, index)}
                    key={i.key}
                    selected={i.selected}
                    name={i.name}
                  />
                );
              }

              if (index !== 3 && more === false) {
                return (
                  <Leftheading
                    onClick={() => clickHandler(i, index)}
                    key={i.key}
                    selected={i.selected}
                    name={i.name}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
      <Description index={description} />
    </React.Fragment>
  );
};

export default Scrolltwo;
