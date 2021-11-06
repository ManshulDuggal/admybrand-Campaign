import React from 'react'
import styles from "./styles.module.scss";

 const ColumnLayout = ({children}) => {
    return (
        <div className={styles.columnLayoutSection}>
            <div className={styles.columnLayoutContainer}>
                {children}
            </div>
        </div>
    )
}
export default ColumnLayout;
