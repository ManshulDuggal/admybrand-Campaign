import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
interface AccordionProps{
    className ?:any;
    open?:any;
    setOpen(args:any):void;
}
interface AccordionItemProps{
    className ?:any;
    idx?:any;
}
interface AccordionItemToggler{
    className ?:any;
}
interface AccordionItemPanel{
    className ?:any;
}
export const AccordionContext = React.createContext(null);
export const AccordionItemPanel:React.FC<AccordionItemPanel> = ({ children }) => {
  return <>{children}</>;
};
export const AccordionItemToggler:React.FC<AccordionItemToggler> = ({ children }) => {
  return <>{children}</>;
};

export const AccordionItem:React.FC<AccordionItemProps> = ({idx,children}) => {
  const { open, setOpen } = useContext(AccordionContext);
  return (
    <>
      <div
        className={`${children[0].props.className} cursor-pointer select-none`}
        onClick={() => {
          setOpen(open === idx ? -1 : idx);
        }}
      >
        {children[0]}
      </div>
      {(open === idx) && (
        <motion.div initial={{ height: 0 }} animate={{ height: "auto" }}>
          <div className={children[1].props.className}>
            {children[1]}
          </div>
        </motion.div>
      )}
    </>
  );
};
export const Accordion:React.FC<AccordionProps> = ({ children, className,open,setOpen }) => {
  return (
    <AccordionContext.Provider value={{open,setOpen}}>
    <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
};
