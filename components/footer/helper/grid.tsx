import React from "react";
import { data } from "../../../constants/api/api";
import { motion } from "framer-motion";
import Item from "./item";
import styles from "../footer.module.scss";

const Grid = ({ expand }) => {
  if (expand === true)
    return (
      <motion.div
        className={styles.gridcontainer}
        initial={{ y: 100 }}
        animate={{ y: -15 }}
        transition={{ duration: 0.1 }}
      >
        {data.map((component) => (
          <Item item={component} key={component.key} />
        ))}
      </motion.div>
    );
  else return null;
};

export default Grid;
