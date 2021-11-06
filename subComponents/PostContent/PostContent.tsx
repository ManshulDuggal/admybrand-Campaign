import React from 'react';
import styles from "../../styles/feed.module.scss"
import localStyles from "./styles.module.scss"

 const PostContent = () => {
    return (
        <div className={localStyles.postContent}>
        <div className={styles.textLight}>
          <p>
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
          </p>
        </div>
        <span className={localStyles.postImgPlaceholder}></span>
        
        </div>
    )
}
export default PostContent;
