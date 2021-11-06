import React from "react";
import Image from "next/image";
import styles from "../../styles/feed.module.scss";
import localStyles from "./styles.module.scss";
import FollowBtn from "../FollowBtn/FollowBtn";
import {
  Dropdown,
  DropdownBtn,
  DropdownPanel,
} from "../../elements/DropdownR/DropDownR";
import { svgs } from "../../constants/icons/icons";
interface Props {
  followed: boolean;
  setFollowed(arg: boolean): void;
}
const data = [
  {type:"Share this post",icon:svgs.sharePost},
  {type:"Copy post link",icon:svgs.copyPost},
  {type:"Embed this post",icon:svgs.embedPost},
  {type:"Hide this post",icon:svgs.hidePost},
  {type:"Report",icon:svgs.reportPost},
  {type:"Improve my feed",icon:svgs.improvePost},
  
];
const PrimaryUserDetails: React.FC<Props> = ({ followed, setFollowed }) => {
  return (
    <div className={localStyles.secondaryWrapper}>
      <div className={localStyles.imgPlaceholder}></div>
      <div className={localStyles.postUserDetailsContainer}>
        <div className={localStyles.postUserDetailsTextContainer}>
          <div className={localStyles.postUserDetailsTextContainerChild}>
            <h1 className={styles.textDark}>{`XYZ Technologies`} </h1>
            <FollowBtn followed={followed} setFollowed={setFollowed} />
          </div>
          <div
            className={localStyles.postUserDetailsContainerSmallTextContainer}
          >
            {["Advertiser", "|", "AdmyBRAND"].map((item, index) => (
              <span key={index} className={styles.textLight}>
                {item}
              </span>
            ))}
          </div>
          <span className={styles.textLight + " opacity-80"}>{`12 hours`}</span>
        </div>
      </div>
      <Dropdown className={{ "align-items": "end" }}>
        <DropdownBtn>
          <button>
            <Image
              src={"/assets/svg/moreThreeDots.svg"}
              width={24}
              height={24}
            />
          </button>
        </DropdownBtn>
        <DropdownPanel>
          <div className={localStyles.panel}>
            {data.map((item, index) => (
              <div
                key={index}
                className={localStyles.options}
              >
                <Image src={item.icon} width={24} height={24}/>
                <span>{item.type}</span>
              </div>
            ))}
          </div>
        </DropdownPanel>
      </Dropdown>
    </div>
  );
};
export default PrimaryUserDetails;
