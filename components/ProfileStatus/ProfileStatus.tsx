import React from "react";
import styles from "../../styles/feed.module.scss";
import RoundedBorderCard from "../RoundedBorderCard/RoundedBorderCard";
import localStyles from "./styles.module.scss";
import { profileSchema }  from "./api";
interface UserDetails {
  name: string;
  userName: string;
  followerCount: number;
  followingCount: number;
}
interface Props{
  userDetails : UserDetails;
}
const ProfileStatus:React.FC<Props> = ({userDetails}) => {
  const {name, userName, followerCount, followingCount} = userDetails;
  return (
    <RoundedBorderCard>
      <div className={localStyles.mainWrapper}>
        <div className={localStyles.primaryDetailsContainer}>
          <div className={localStyles.profilePicPlaceholder}></div>
          <h1 className={styles.headingDark}>{name}</h1>
          <h1 className={styles.headingLight}>{userName}</h1>
          <div className={localStyles.followTypeContainer}>
            <div>
              <h1 className={`${styles.headingDarkBigBold}`}>{followerCount}</h1>
              <h1 className={`${styles.textLight}`}>{`Followers`}</h1>
            </div>
            <div>
              <h1 className={styles.headingDarkBigBold}>{followingCount}</h1>
              <h1 className={styles.textLight}>{`Following`}</h1>
            </div>
          </div>
        </div>
        <ul>
          {profileSchema.map((item) => (
            <li key={Math.random()}>
              <h1 className={styles.headingLight}>{item.field}</h1>
              <h1 className={styles.headingDark}>{item.data}</h1>
            </li>
          ))}
          <button className={styles.hollowBtnPink}>{`Settings`}</button>
        </ul>
      </div>
    </RoundedBorderCard>
  );
};

export default ProfileStatus;
