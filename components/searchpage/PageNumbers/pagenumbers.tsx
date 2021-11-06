import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import styles from './pagenumbers.module.scss';

function Pagenumbers() {

    const [page, setPage] = useState(1);

    return (
        <div className={styles.pagenoContainer}>
                <AiOutlineLeft className={styles.pagenoLeft}/>
                <div className={`${page == 1 ? styles.pagenoSelected: styles.pagenoElements}`} onClick={()=>setPage(1)} >1</div>
                <div className={`${page == 2 ? styles.pagenoSelected: styles.pagenoElements}`} onClick={()=>setPage(2)}>2</div>
                <div className={`${page == 3 ? styles.pagenoSelected: styles.pagenoElements}`} onClick={()=>setPage(3)}>3</div>
                <div className={`${page == 4 ? styles.pagenoSelected: styles.pagenoElements}`} onClick={()=>setPage(4)}>4</div>
                <div className={`${page == 5 ? styles.pagenoSelected: styles.pagenoElements}`} onClick={()=>setPage(5)}>5</div>
                <AiOutlineRight className={styles.pagenoLeft}/>
        </div>
    )
}

export default Pagenumbers;
