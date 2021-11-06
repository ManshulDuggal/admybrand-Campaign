import React from 'react'
import localStyles from "./styles.module.scss";
import Image from "next/image";
import { icons } from '../../constants/icons/icons';
interface Props{
    followed:boolean;
    setFollowed(arg:boolean):void;
}
 const FollowBtn:React.FC<Props> = ({followed, setFollowed}) => {
    return (
        <button
                  className={
                    followed
                      ? localStyles.isFollowing
                      : localStyles.isNotFollowing
                  }
                  onClick={() => setFollowed(!followed)}
                >
                  {followed ? `Following` : `Follow`}
                  {followed && (
                    <Image src={icons.followTick} width={16} height={16} />
                  )}
                </button>
    )
}
export default FollowBtn;
