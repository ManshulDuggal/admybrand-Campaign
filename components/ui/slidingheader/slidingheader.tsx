import { motion } from "framer-motion";
import React, { memo } from "react";
import classes from "./slidingheader.module.scss";

interface props {
  morestate?: boolean;
  itemstate?: number;
  data?: Array<{
    key: string;
    selected: boolean;
    name: string;
  }>;
  onclickitem?: (e: React.MouseEvent<HTMLLIElement>, index: number) => any;
  onclickmore?: React.MouseEventHandler<HTMLLabelElement>;
  previoustab?: number;
  elementwidth?: number;
  custominactivestyle?: string;
  customactivestyle?: string;
}

const Slidingheader = ({
  morestate,
  itemstate,
  data,
  onclickitem,
  onclickmore,
  previoustab,
  elementwidth = 150,
  customactivestyle,
  custominactivestyle,
}: props) => {
  var i = itemstate - previoustab;
  return (
    <>
      <section className={classes.outermainwrapper}>
        {morestate ? (
          <ul className={classes.ul}>
            {data.map((item, index) => {
              if (index <= 2) {
                return itemstate === index ? (
                  <section
                    key={item.key}
                    className={"flex flex-col items-center"}
                  >
                    <li
                      className={
                        customactivestyle
                          ? `${classes.liactive} ${customactivestyle}`
                          : classes.liactive
                      }
                    >
                      {item.name}
                    </li>
                    <motion.div
                      className={classes.underline}
                      initial={
                        i > 0
                          ? { x: -elementwidth * i }
                          : { x: elementwidth * -i }
                      }
                      animate={{ x: 0 }}
                      transition={{ duration: 0.5 }}
                    ></motion.div>
                  </section>
                ) : (
                  <li
                    key={item.key}
                    onClick={(e) => onclickitem(e, index)}
                    className={
                      custominactivestyle
                        ? `${classes.li}${custominactivestyle}`
                        : classes.li
                    }
                  >
                    {item.name}
                  </li>
                );
              }
            })}
          </ul>
        ) : (
          <ul className={classes.ul}>
            {data.map((item, index) => {
              return itemstate === index ? (
                <section
                  key={item.key}
                  className={"flex flex-col items-center"}
                >
                  <li
                    className={
                      customactivestyle
                        ? `${classes.liactive} ${customactivestyle}`
                        : classes.liactive
                    }
                  >
                    {item.name}
                  </li>
                  <motion.div
                    className={classes.underline}
                    initial={
                      i > 0
                        ? { x: -elementwidth * i }
                        : { x: elementwidth * -i }
                    }
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                  ></motion.div>
                </section>
              ) : (
                <li
                  key={item.key}
                  onClick={(e) => onclickitem(e, index)}
                  className={
                    custominactivestyle
                      ? `${classes.li}${custominactivestyle}`
                      : classes.li
                  }
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        )}
        {morestate && (
          <section className={classes.more}>
            <label
              onClick={onclickmore}
              className={
                custominactivestyle
                  ? `${classes.li}${custominactivestyle}`
                  : classes.li
              }
            >
              {"⠇More Options"}
            </label>
          </section>
        )}
      </section>
      <section className={classes.outermainwrappermobile}>
        <ul className={classes.ul}>
          {data.map((item, index) => {
            return itemstate === index ? (
              <section key={item.key} className={"flex flex-col items-center"}>
                <li
                  className={
                    customactivestyle
                      ? `${classes.liactive} ${customactivestyle}`
                      : classes.liactive
                  }
                >
                  {item.name}
                </li>
                <motion.div
                  className={classes.underline}
                  initial={
                    i > 0 ? { x: -elementwidth * i } : { x: elementwidth * -i }
                  }
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
              </section>
            ) : (
              <li
                key={item.key}
                onClick={(e) => onclickitem(e, index)}
                className={
                  custominactivestyle
                    ? `${classes.li}${custominactivestyle}`
                    : classes.li
                }
              >
                {item.name}
              </li>
            );
          })}
        </ul>
        {morestate && (
          <section className={classes.more}>
            <label
              onClick={onclickmore}
              className={
                custominactivestyle
                  ? `${classes.li}${custominactivestyle}`
                  : classes.li
              }
            >
              {"⠇More Options"}
            </label>
          </section>
        )}
      </section>
    </>
  );
};

export default memo(Slidingheader);
