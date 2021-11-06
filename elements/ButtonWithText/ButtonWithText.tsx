import React from 'react';
import styles from './ButtonWithText.module.scss';

interface props{
    onClick: any;
}

function ButtonWithText({onClick}: props) {
    return (
        <>
        <button
            className={styles.buttonWithTextContainer}
            onClick={onClick}
            >
            Cancel
        </button>
        </>
    )
}

export default ButtonWithText
