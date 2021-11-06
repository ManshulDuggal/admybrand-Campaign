
import React from "react";
import styles from "./DropDownR.module.scss";
interface DropdownProps{
    className?:any;
}

export const DropdownPanel = ({ children }) => {
  return <>{children}</>;
};

export const DropdownBtn = ({ children }) => {
  return <>{children}</>;
};

export const Dropdown:React.FC<DropdownProps> = ({ children,className }) => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div className={styles.dropdown} style={className && className}>
      <div onClick={() => setOpen(!isOpen)}>
        {children[0]}
      </div>
      <div className={styles.dropdownList}>
      {children[1]}
      </div>
    </div>
  );
};
