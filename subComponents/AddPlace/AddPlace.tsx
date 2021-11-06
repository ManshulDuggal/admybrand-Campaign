import Tippy from '@tippy.js/react';
import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { FiPlusSquare } from 'react-icons/fi';
import ButtonWithText from '../../elements/ButtonWithText/ButtonWithText';
import HeaderWithDescription from '../../elements/HeaderWithDescription/HeaderWithDescription';
import styles from './AddPlace.module.scss';

interface props{
    handleMapControl:any;
    mapControlAddPlace: boolean;
    handleCancel: any;
}

function AddPlace({handleMapControl, mapControlAddPlace, handleCancel}: props) {
    return (
        <>
            <div className={styles.mapControlContainer}>
                <div
                className={`${
                    mapControlAddPlace
                    ? styles.noMapControl
                    : styles.mapControlLayout
                }`}
                >
                <div className={styles.mapControlPlaceModal}>
                    <div className={styles.mapControlPlaceModalTop}>
                    <div className={styles.mapControlSearch}>
                        <BiSearch className={styles.mapControlSearchIcon} />
                        <input
                        className={styles.mapControlSearchInput}
                        type="text"
                        placeholder="Find a place or address"
                        />
                    </div>
                        <ButtonWithText onClick={handleCancel}/>
                    </div>

                    <HeaderWithDescription 
                        header='Search nearby a Landmark' 
                        description='Find Landmark, Address or Enter Coordinates to find a place on map and Search ads around.'
                    />
                    
                </div>
                </div>

            <Tippy content='Add a place on map'>
                <div><FiPlusSquare className={styles.mapControlIcons} onClick={handleMapControl}/></div>
            </Tippy>
            </div>
            <div className={styles.mapControlDivider}></div>
        </>
    )
}

export default AddPlace
