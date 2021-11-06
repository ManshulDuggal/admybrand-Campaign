import React, { useState } from "react";
import RoundedBorderCard from "../RoundedBorderCard/RoundedBorderCard";
import localStyles from "./styles.module.scss";
import PrimaryUserDetails from "../../subComponents/PrimaryUserDetails/PrimaryUserDetails";
import PostContent from "../../subComponents/PostContent/PostContent";
import PostReach from "../../subComponents/PostReach/PostReach";
import PostActions from "../../subComponents/PostActions/PostActions";

const FeedPost = () => {
  const [followed, setFollowed] = useState(false);
  return (
    <RoundedBorderCard>
      <div className={localStyles.mainWrapper}>
        <PrimaryUserDetails followed={followed} setFollowed={setFollowed} />
        <PostContent />
        <PostReach />
        <PostActions />
      </div>
    </RoundedBorderCard>
  );
};

export default FeedPost;
