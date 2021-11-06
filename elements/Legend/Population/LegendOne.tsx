import React, { useState, useEffect } from "react";
import styles from "./Legend.module.scss";

const Legend = ({ hoverContent }) => {
  const [showContent, setShowContent] = useState(false);
  const hideContentHandler = () => setShowContent(false);
  const showContentHandler = () => setShowContent(true);
  useEffect(() => {
    return setShowContent(false);
  }, []);
  return (
    <>
      {showContent && (
        <div className={styles.hoverContent} onMouseDown={hideContentHandler}>
          <div className={styles.close} onClick={hideContentHandler}>
            +
          </div>
          {hoverContent}
        </div>
      )}
      <div className={styles.legend} onMouseOver={showContentHandler}>
        <p>Legend</p>
      </div>
    </>
  );
};

export default Legend;
