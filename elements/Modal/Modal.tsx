import React from "react";
import localStyles from "./styles.module.scss";
interface Props {
  handler(arg: boolean): void;
}
const Modal: React.FC<Props> = ({ handler, children }) => {
    const toggler = (e)=>{
        if (e.target === e.currentTarget) {
            handler(false);
          }
    }
  return (
    <div
      className={localStyles.wrapper}
      onClick={(e)=>toggler(e)}
    >
      {children}
    </div>
  );
};
export default Modal;
