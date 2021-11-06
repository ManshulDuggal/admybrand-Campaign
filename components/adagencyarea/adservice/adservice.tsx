import React from "react";
import Image from "next/image";
import styles from "./adservice.module.scss";
import { adservice } from "../../../constants/api/adagency";

const AdServiceArea = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.mainheading}>
          Your brand deserves Best Advertising Services
        </h1>

        <div>
          <p className={styles.detail}>
            While there are big 4 for Consulting firms or big 4 Accounting firms
            there is just big 1 for Advertising and Marketing firms.
          </p>
        </div>
        <button className={styles.button}>
          <h1 className="text-white font-pops">Get Callback 24X7 →</h1>
        </button>
        <p className={styles.text}>
          Brands with turnover &gt; 12crore are eligible for Free
        </p>
      </div>
      <div className={styles.right}>
        {adservice.map((item) => (
          <React.Fragment key={item.key}>
            <div className={styles.innercontainer}>
              <h1 className={styles.heading}>{item.subheading}</h1>
              <p className={styles.description}>{item.data}</p>
              <div className={styles.image}>
                <Image src={item.image} height={80} width={80} alt="image" />
              </div>
            </div>
            <div className={styles.minicontainer}>
              <h1 className={styles.heading}>{item.subheading}</h1>
              <div className={styles.image}>
                <Image src={item.image} height={80} width={80} alt="image" />
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default AdServiceArea;
