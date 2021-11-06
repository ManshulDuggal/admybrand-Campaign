import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import styles from "./TabLayout.module.scss";

interface TabLayoutProps {
  className?: any;
  open?: any;
  setOpen(args: any): void;
}
interface TabListProps {
  className?: any;
}
interface TabProps {
  className?: any;
  idx?: any;
}
interface TabPanelProps {
  className?: any;
  idx?: any;
}
export const TabLayoutContext = React.createContext(null);
export const TabList:React.FC<TabListProps> = ({ children,className }) => {
  return <div className={className}>{children}</div>;
};
export const Tab: React.FC<TabProps> = ({ children, idx }) => {
  const { open, setOpen } = useContext(TabLayoutContext);
  return <div onClick={() => setOpen(idx===open?-1:idx)}>{children}</div>;
};
export const TabPanels = ({ children }) => {
  return <>{children}</>;
};
export const TabPanel: React.FC<TabPanelProps> = ({ children, idx,className }) => {
  const {open} = useContext(TabLayoutContext);
  if (idx === open) return <div className={className}>{children}</div>;
  else return null;
};

export const TabLayout: React.FC<TabLayoutProps> = ({
  children,
  className,
  open,
  setOpen,
}) => {
  return (
    <TabLayoutContext.Provider value={{ open, setOpen }}>
      <div className={`flex flex-col ${className}`}>{children}</div>
    </TabLayoutContext.Provider>
  );
};
