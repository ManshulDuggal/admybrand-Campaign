import React from 'react'
import styles from '../customerreview.module.scss'
import Image from 'next/image'
import { svgs } from '../../../../constants/icons/icons'

const CustomerCard = () => {
    return (
        <React.Fragment>
            <div className={styles.card}>
                <div>
                    <Image src={svgs.review} width={170} height={90} alt='img'/>
                </div>
                <p className={styles.text}>
                Right now, the realization of bringing together diverse global top talent is critical to the success of every software company and the competition for diverse talent is 
                fiercer than ever. SeekOut enables Aviatrix to efficiently and intelligently recruit and hire a world-class diverse team, helping us maintain our focus on hiring quality 
                over quantity.
                </p>
                <div className={styles.divide}/>
                <h3 className={`${styles.name} font-semibold text-3xl`}>James Loo</h3>
                <h1 className={styles.name}>
                Head of Talent Acquisition
                </h1>
                <h1 className={styles.name}>NETFLIX</h1>
            </div>
        </React.Fragment> 
    )
}

export  default CustomerCard