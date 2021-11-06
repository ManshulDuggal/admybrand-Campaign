import React from "react";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import MyPages from "../MyPages/MyPages";
import PostForm from "../PostForm/PostForm";
import FeedPost from "../FeedPost/FeedPost";
import styles from "./styles.module.scss";
import globalStyles from "../../styles/feed.module.scss";
import RoundedBorderCard from "../RoundedBorderCard/RoundedBorderCard";
import Image from "next/image";
import { svgs, icons } from "../../constants/icons/icons";
import { MarketingShots } from "../../subComponents/MarketingShots/MarketingShots";
import TopCourses from "../../subComponents/TopCourses/TopCourses";
import { RecentCardFeed } from "../../subComponents/RecentCardFeed/RecentCardFeed";
const dummyUser = {
  name: "Aradhana Sinha",
  userName: "Cars.24",
  followerCount: 52,
  followingCount: 26,
};
const Feed = () => {
  return (
    <section className={styles.mainWrapper}>
      <div className={styles.gridLayout}>
        <div className={styles.primaryStatusColumn}>
          <ProfileStatus userDetails={dummyUser} />
          <MyPages />
          <RecentCardFeed />
        </div>
        <div className={styles.feedColumn}>
          <PostForm />
          {[0, 1, 2, 3].map((item) => (
            <FeedPost key={item} />
          ))}
        </div>
        <div className={styles.shotsSection}>
          <MarketingShots />
          <TopCourses />
        </div>
      </div>
    </section>
  );
};
export default Feed;
