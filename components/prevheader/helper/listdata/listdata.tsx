import Image from "next/image";
import React from "react";
import { icons } from "../../../../constants/icons/icons";
import styles from "./styles/listdata.module.scss";

interface props {
  data: {
    key: string;
    data: string[];
  };
}

const Listdata = ({ data }: props) => {
  return (
    <div className={styles.divwrapper}>
      {data.data.map((item, index) => (
        <div className={styles.textwrapper} key={index}>
          <h3 className={styles.innertext}>{item}</h3>
          <div className={styles.imagecontainer}>
            <Image
              src={icons.bottomarrow}
              height={24}
              width={24}
              objectFit={"fill"}
              alt="img"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listdata;
