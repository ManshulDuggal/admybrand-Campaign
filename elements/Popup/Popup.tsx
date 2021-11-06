import React from 'react';
import styles from './Popup.module.scss';
import PopupItem from './PopupItem/PopupItem';

interface props {
    items: object;
    showPopup: boolean;
    handleCancel:any;
    itemClicked:any;
}

const PopUp = ({items,showPopup,handleCancel,itemClicked}) => {
    
    return(
        showPopup ?
        (
            <div className={styles.submenuContainer} onMouseLeave={handleCancel}>
                {items.map((item,id) => (
                    <PopupItem id={id} itemClicked={itemClicked} item={item}/>
                ))}
            </div>
        )
        :null
    );
}

export default PopUp;