import React from "react";
import styles from "../../styles/adagency.module.scss";

interface Props {
  heading: string;
  type: string;
  placeholder: string;
  customstyleheading?: any;
  customstyleInputBox?: any;
  customstyleInputDiv?: any;
  required?: any;
  onChange?: any;
  value?: any;
  name?: any;
}

const InputBox = ({
  heading,
  type,
  placeholder,
  customstyleheading,
  customstyleInputBox,
  customstyleInputDiv,
  required,
  onChange,
  value,
  name,
}: Props) => {
  return (
    <div className={`${styles.MobileNumberDiv} ${customstyleInputDiv}`}>
      <h1 className={` ${customstyleheading}`}>{heading}</h1>
      <input
        required={required}
        type={type}
        placeholder={placeholder}
        className={`${styles.inputBox} ${customstyleInputBox}`}
        onChange={onChange}
        value={value}
        name={name}
      />
    </div>
  );
};

export default InputBox;
