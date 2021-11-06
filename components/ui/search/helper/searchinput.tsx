import React from "react";
import classes from "../searchstyles.module.scss";

interface props {
  customstyles?: string;
  heading?: string;
  value?: string;
  inputtype?:
    | "text"
    | "none"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search";
  defaultValue?: string | number | readonly string[];
  name?: string;
  placeholder?: string;
  type?: string;
  children?: React.ReactNode;
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
  onclick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Searchinput = React.forwardRef(
  (
    {
      customstyles,
      heading,
      value,
      inputtype,
      defaultValue,
      name,
      placeholder,
      type,
      children,
      onchange,
      onclick,
    }: props,
    ref: React.LegacyRef<HTMLInputElement>
  ) => {
    return (
      <button
        onClick={onclick}
        className={`${classes.webinputbox + " " + customstyles}`}
      >
        <label className={classes.inputheading}>{heading}</label>
        <section className={classes.inputfeild}>
          <input
            onChange={(e) => onchange(e)}
            type={type}
            ref={ref}
            placeholder={placeholder}
            value={value}
            alt={heading}
            inputMode={inputtype}
            defaultValue={defaultValue}
            name={name}
          />
        </section>
        {children}
      </button>
    );
  }
);

Searchinput.displayName = "Searchinput";
export default Searchinput;
