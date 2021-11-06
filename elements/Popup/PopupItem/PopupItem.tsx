import React from 'react';
import styles from './PopupItem.module.scss';

interface props {
    item: string;
    id: number;
    itemClicked:any;
}

const PopupItem = ({item,id,itemClicked}) => {
    return (
        <div className={styles.subMenu} key={id}>
            <h4 className={styles.submenutitle} onClick={()=>itemClicked(item)}>{item}</h4>
        </div>
    );
}

export default PopupItem;