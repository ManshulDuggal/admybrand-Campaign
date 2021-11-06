import Image from "next/image";
import { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Dropdown from "../../ui/dropdown/dropdown";
import styles from "./actionbutton.module.scss";
import { adscardmenudata } from "../../../constants/api/api";
import LikeHeart from "../../../elements/LikeHeart/LikeHeart";

const ActionButtons = () => {
  
  const [dot, setDot] = useState(false);

  return (
    <div className={styles.actionButtonContainer}>
      <span>
        <LikeHeart/>
      </span>
      <span className={styles.actionButtonDot} onClick={()=>setDot(!dot)}>
        <BiDotsVerticalRounded />
      </span>
      {dot && (<div onMouseLeave={()=>setDot(!dot)}><Dropdown smallmenudata={adscardmenudata} customstyle={styles.adssmallmenu}/></div>)}
    </div>
  );
};

export default ActionButtons;
