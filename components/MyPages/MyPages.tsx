import React from "react";
import styles from "../../styles/feed.module.scss";
import RoundedBorderCard from "../RoundedBorderCard/RoundedBorderCard";
import localStyles from "./styles.module.scss";
import { dummyData } from "./api";
const component = () => {
  return (
    <RoundedBorderCard>
      <div className={localStyles.mainWrapper}>
        <h1 className={styles.headingDark}>{`My Pages(08)`}</h1>
        <ul>
          {dummyData.map((item) => (
            <li key={Math.random()}>
              <div>
                <div className={localStyles.imgPlaceholder}></div>
                <h1 className={styles.headingLight}>{item.field}</h1>
              </div>
              <span>{item.notifications}</span>
            </li>
          ))}
          <button>
            <span className={styles.headingDark}>{`See All Pages`}</span>
          </button>
        </ul>
      </div>
    </RoundedBorderCard>
  );
};

export default component;
