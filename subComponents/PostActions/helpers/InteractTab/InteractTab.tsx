import React from "react";
import globalStyles from "../../../../styles/feed.module.scss";
import localStyles from "./InteractTab.module.scss";

const InteractTab = () => {
  return (
    <div className={localStyles.wrapper}>
      <div className={localStyles.textWrapper}>
        <h1 className={localStyles.textLight}>Interacting with XYZ Technologies</h1>
        <h1 className={localStyles.textLight}>Remaining interact credit: 4</h1>
      </div>
      <form>
          <label className={localStyles.textLightSmall}>Message</label>
          <textarea placeholder="Enter Message..."></textarea>
      </form>
    </div>
  );
};
export default InteractTab;
