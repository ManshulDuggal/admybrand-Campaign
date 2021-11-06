import React from "react";
import classes from "./styles/dropdown.module.scss";
import Link from "next/link";

interface smallmenudataobject {
  one: Array<string>;
}

interface props {
  smallmenudata?: Array<smallmenudataobject>;
  customstyle?: string;
}

const Dropdown = React.forwardRef(
  (
    { smallmenudata, customstyle }: props,
    ref?: React.LegacyRef<HTMLElement>
  ) => {
    return (
      <section ref={ref} className={`${classes.main + " " + customstyle}`}>
        {smallmenudata.map((item, _) => {
          return (
            <ul className={classes.ul} key={_}>
              {item.one.map((items, __) => {
                return (
                  <li className={classes.li} key={__}>
                    <Link href={`/${items.replace(" ", "").toLowerCase()}`}>
                      {items}
                    </Link>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </section>
    );
  }
);

Dropdown.displayName = "Dropdown";

export default Dropdown;
