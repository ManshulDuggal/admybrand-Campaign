import React from 'react';
import styles from './styles.module.scss';

const RoundedBorderCard = ({children}) => {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    );
}

export default RoundedBorderCard;
