import React from "react";
import { searchdescription } from "../../constants/api/api";
import styles from "./styles/description.module.scss";

interface Props {
  index: number;
}

const Description = ({ index }: Props) => {
  if (index === 0)
    return <div className={styles.descriptionmain}>{searchdescription[0]}</div>;
  else if (index === 1)
    return <div className={styles.descriptionmain}>{searchdescription[1]}</div>;
  else if (index === 2 || index === 3)
    return <div className={styles.descriptionmain}>{searchdescription[2]}</div>;
  else if (index === 4)
    return <div className={styles.descriptionmain}>{searchdescription[3]}</div>;
  else if (index === 5)
    return <div className={styles.descriptionmain}>{searchdescription[4]}</div>;
  else if (index === 6)
    return <div className={styles.descriptionmain}>{searchdescription[5]}</div>;
  else if (index === 7)
    return <div className={styles.descriptionmain}>{searchdescription[6]}</div>;
  else return null;
};

export default Description;
