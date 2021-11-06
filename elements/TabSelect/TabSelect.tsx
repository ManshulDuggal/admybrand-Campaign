/**
 * @author Rishi Raj
 * @email erishiraj@gmail.com
 * @create date 2021-09-30 15:16:18
 * @modify date 2021-09-30 15:16:18
 * @desc [description]
 */
import React from "react";

interface props {
    className?: string,
    onClick?: any,
    text?: string
}
const TabSelect = ({ className, onClick, text }: props) => {
    return (
        <div
            className={className}
            onClick={onClick}
        >
            {text}
        </div>
    )
}
export default TabSelect;