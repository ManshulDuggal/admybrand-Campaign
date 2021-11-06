import React, { useState } from 'react'
import styles from './likeheart.module.scss';

function LikeHeart() {

    const [like, setLike] = useState(false);
    const changeLike = () => {
        setLike(!like);
    };

    return (
        <div onClick={changeLike}>
            <div className={`${styles.heart} ${like ? styles.isActive : ""}`}/>
        </div>
    )
}

export default LikeHeart;
