import React from "react";
import styles from "./styles/scrollanimation.module.scss";

const Scrollanimation = ({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
}) => {
  return (
    <div className={styles.mainwrapper}>
      <div onClick={onClick} className={styles.mouse}></div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.scrollArrow}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
        />
      </svg>
    </div>
  );
};

export default Scrollanimation;
