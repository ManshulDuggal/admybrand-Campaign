import React from "react";
import classes from "./styles/dropdown.module.scss";

interface props {
  data?: Array<string>;
  onclick?: (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    item: string
  ) => any;
  value?: string;
  customstyle?: string;
  customcomponent?: boolean;
  children?: React.ReactNode;
}

const Categorydropdown = ({
  data,
  onclick,
  value,
  customstyle,
  customcomponent,
  children,
}: props) => {
  if (customcomponent) {
    return (
      <section className={classes.categorydropdown + " " + customstyle}>
        <ul className={classes.categoryul}>{children}</ul>
      </section>
    );
  }

  return (
    <section className={classes.categorydropdown + " " + customstyle}>
      <ul className={classes.categoryul}>
        {data.map((item, index) => {
          if (item.includes(value)) {
            return (
              <li
                onClick={(e) => onclick(e, item)}
                className={classes.categoryli}
                key={index}
              >
                {item}
              </li>
            );
          }
        })}
      </ul>
    </section>
  );
};

export default Categorydropdown;
