import React from "react";
import localStyles from "./styles.module.scss";
interface Props{
    placeholder:string;
}
export const RoundedInput:React.FC<Props> = ({placeholder}) => {
    return (
        <input
          type="text"
          className={localStyles.postInput}
          placeholder={placeholder}
        />
    )
}
