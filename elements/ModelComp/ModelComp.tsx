/**
 * @author Rishi Raj
 * @email rishi@snaphy.com
 * @create date 2021-10-11 13:17:38
 * @modify date 2021-10-11 13:17:38
 * @desc [description]
 */
import React, { ReactNode }  from "react";

// Styles
import styles from './ModelComp.module.scss';

interface props {
    isClosed: boolean;
    setOpenState?: any;
    children: ReactNode;
}

const ModelComp = ({isClosed, children}:props) => {
    return(
        <div className={`${isClosed ? styles.hiddenModal : styles.displayModal}`} style={{zIndex:9999}}>
            {/* Modal Card*/}
            <div className={styles.card}>
                {children}
            </div>
        </div>
    )
}

export default ModelComp;