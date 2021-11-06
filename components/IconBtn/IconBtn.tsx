import React from 'react'
import Image from "next/image";
import localStyles from "./styles.module.scss";

const IconBtn = ({text, icon}) => {
    return (
        <button key={Math.random()} className={localStyles.iconBtn}>
            <Image src={icon} width={20} height={20}/>
            <span className={localStyles.textLight}>{`${text}`}</span>
          </button>
    )
}
export default IconBtn;
