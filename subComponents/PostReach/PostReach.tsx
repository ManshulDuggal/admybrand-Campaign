import React from 'react'
import styles from "../../styles/feed.module.scss";
import localStyles from "./styles.module.scss";


 const PostReach = () => {
    return (
        <div
          className={
            `${styles.textLight} ${localStyles.customText}`
          }
        >
          {["16 Likes", "•", "24 Views"].map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
    )
}
export default PostReach;
