import Tippy from '@tippy.js/react'
import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { RiRoadMapLine } from 'react-icons/ri';
import ButtonWithText from '../../elements/ButtonWithText/ButtonWithText';
import styles from './SearchLocality.module.scss';
import HeaderWithDescription from '../../elements/HeaderWithDescription/HeaderWithDescription';

interface props{
    handleMapControl:any;
    mapControlLocality: boolean;
    handleCancel: any;
}

function SearchLocality({handleMapControl, mapControlLocality, handleCancel}: props) {
    return (
        <>
            <div className={styles.mapControlContainer}>
            <div
              className={`${
                mapControlLocality
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
                      placeholder="Search by Locality"
                    />
                  </div>
                  <ButtonWithText onClick={handleCancel}/>
                </div>
                <HeaderWithDescription 
                    header='Search Ads in a Locality' 
                    description='Helps you look for ad spaces in and around a locality. Search & pin a locality on the map.'
                />
              </div>
            </div>
          

          <Tippy content='Search by Locality'>
            <div><RiRoadMapLine className={styles.mapControlIcons} onClick={handleMapControl}/></div>
          </Tippy>
        </div>
        <div className={styles.mapControlDivider}></div>
        </>
    )
}

export default SearchLocality
