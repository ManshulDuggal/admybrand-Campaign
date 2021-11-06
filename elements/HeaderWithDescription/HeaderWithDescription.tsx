import React from 'react';
import styles from './HeaderWithDescription.module.scss';

interface props{
    header: string;
    description: string;
}

function HeaderWithDescription({header, description}: props) {
    return (
        <>
            <div className={styles.headerWithDescriptionBottom}>
                <div className={styles.headerWithDescriptionBottomHeading}>
                    {header}
                </div>
                <div className={styles.headerWithDescriptionMargin}>
                    <p className={styles.headerWithDescriptionBottomP}>
                        {description}
                    </p>
                </div>
            </div>
        </>
    )
}

export default HeaderWithDescription
