import Tippy from '@tippy.js/react'
import React from 'react'
import { BiStreetView } from 'react-icons/bi';
import styles from './Views.module.scss';

interface props{
    handleMapControl:any;
    mapControlViews: boolean;
    handleCancel: any;
}

function Views({handleMapControl, mapControlViews, handleCancel}: props) {
    return (
        <>
          <div className={styles.mapControlContainer}>
          <div className={`${mapControlViews ? styles.noMapControl: styles.mapControlViews}`} onMouseLeave={handleCancel}>
            <div className={styles.mapControlDropDownWide}>    

              <div className={styles.mapControlDropDownElements}>
                <label className={styles.mapControlDropDownRadio}>
                  <input type="radio" className={styles.mapRadio} name="radio-colors" value="1"></input>
                  <span className={styles.mapControlDropDownTitle}>Normal View</span>
                </label>
              </div>

                <div className={styles.mapControlDropDownElements}>
                  <label className={styles.mapControlDropDownRadio}>
                    <input
                      type="radio"
                      className={styles.mapRadio}
                      name="radio-colors"
                      value="2"
                    ></input>
                    <span className={styles.mapControlDropDownTitle}>
                      Street View
                    </span>
                  </label>
                </div>

                <div className={styles.mapControlDropDownElements}>
                  <label className={styles.mapControlDropDownRadio}>
                    <input
                      type="radio"
                      className={styles.mapRadio}
                      name="radio-colors"
                      value="3"
                    ></input>
                    <span className={styles.mapControlDropDownTitle}>
                      Immersive View
                    </span>
                  </label>
                </div>
              </div>
            </div>
          <Tippy content='Views'>
            <div><BiStreetView className={styles.mapControlIcons} onClick={handleMapControl}/></div>
          </Tippy>
        </div>
        <div className={styles.mapControlDivider}></div>  
        </>
    )
}

export default Views
