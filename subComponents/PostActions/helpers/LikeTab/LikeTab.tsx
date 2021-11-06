import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import localStyles from "./LikeTab.module.scss";
import reactions from "./api";
interface LikeTabProps {
  setReaction(args: any): void;
  reaction?: any;
}

const LikeTab: React.FC<LikeTabProps> = ({ setReaction, reaction }) => {
  return (
    <div className={localStyles.wrapper}>
      
      <div className={localStyles.card}>
          {reactions.map((item, index) => (
            <div className={localStyles.reactionContainer}>
            <span className={localStyles.reactionCaption}>{item.type}</span>
            <button
              key={index}
              onClick={() => setReaction({ type: item.type, img: item.img })}
            >
              <Image src={item.img} width={36} height={36} objectFit="cover" quality={100}/>
            </button>
            </div>
          ))}
        </div>
    </div>
  );
};
export default LikeTab;
