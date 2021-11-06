import React from "react";
import localStyles from "./styles.module.scss";
import RoundedBorderCard from "../RoundedBorderCard/RoundedBorderCard";
import { postAddons } from "./api";
import IconBtn from "../IconBtn/IconBtn";
import { RoundedInput } from "../RoundedInput/RoundedInput";
const PostForm = () => {
  return (
    <RoundedBorderCard>
    <div className={localStyles.mainWrapper}>
      <div className={localStyles.postInputContainer}>
        <span className={localStyles.imgPlaceholder}></span>
       <RoundedInput placeholder={`Create A Post...`}/>
      </div>
      <div className={localStyles.actionBtnContainer}>
        {postAddons.map((item,index) => (
          <IconBtn text={item.type} icon={item.icon} key={index}/>
        ))}
      </div>
    </div>
    </RoundedBorderCard>
  );
};

export default PostForm;
