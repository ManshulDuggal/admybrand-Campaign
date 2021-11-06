import Tippy from '@tippy.js/react'
import React from 'react'
import { AiOutlineBarChart } from 'react-icons/ai'
import { RiQrScan2Line } from 'react-icons/ri'
import ButtonWithText from '../../elements/ButtonWithText/ButtonWithText'
import HeaderWithDescription from '../../elements/HeaderWithDescription/HeaderWithDescription'
import styles from './ViaAnalytics.module.scss';

interface props{
    handleMapControl:any;
    mapControlVIA: boolean;
    handleCancel: any;
}

function ViaAnalytics({handleMapControl, mapControlVIA, handleCancel}: props) {
    return (
        <>
            <div className={styles.mapControlContainer}>
                <div
                className={`${
                    mapControlVIA ? styles.noMapControl : styles.mapControlLayout
                }`}
                >
                <div className={styles.mapControlPlaceModal}>
                    <div className={styles.mapControlPlaceModalTop}>
                        <div className={styles.mapControlSearch}>
                        <RiQrScan2Line className={styles.mapControlSearchIcon}/> 
                        <input className={styles.mapControlSearchInput} type="number" placeholder="Enter 6 digit code"/>
                        </div>
                        <ButtonWithText onClick={handleCancel}/>
                    </div>

                    <HeaderWithDescription 
                        header='Get VIA Analytics' 
                        description='VIA is our tool to give analytics for an ad space. Enter 6-digit AMBicode of ad to fetch analytics.'
                    />
                </div>
                </div>

                <Tippy content="VIA Analytics">
                <div>
                    <AiOutlineBarChart
                    className={styles.mapControlIcons}
                    onClick={handleMapControl}
                    />
                </div>
                </Tippy>
            </div>
            <div className={styles.mapControlDivider}></div>

        </>
    )
}

export default ViaAnalytics
