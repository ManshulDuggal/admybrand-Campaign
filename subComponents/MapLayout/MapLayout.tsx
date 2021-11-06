import Tippy from '@tippy.js/react';
import React from 'react';
import { RiMap2Line } from 'react-icons/ri';
import styles from './MapLayout.module.scss';

interface props{
    mapControlLayout: boolean;
    handleMapControl: any;
    handleCancel: any;
    setMapType: any;
    mapType: number;
}

function MapLayout({handleMapControl, mapControlLayout, handleCancel, mapType, setMapType}: props) {
    return (
        <>
        <div className={styles.mapControlContainer}>
          <div className={`${mapControlLayout ? styles.noMapControl: styles.mapControlLayout}`} onMouseLeave={handleCancel}>
            <div className={styles.mapControlDropDown}>

            <div className={styles.mapControlDropDownElements} onClick={() => setMapType(0)}>
              <label className={styles.mapControlDropDownRadio}>
                <input type="radio" className={styles.mapRadio} name="radio-colors" value="1" checked={mapType === 0}></input>
                <span className={styles.mapControlDropDownTitle}>Classic</span>
              </label>
            </div>

            <div className={styles.mapControlDropDownElements} onClick={() => setMapType(1)}>
              <label className={styles.mapControlDropDownRadio}>
                <input type="radio" className={styles.mapRadio} name="radio-colors" value="2" checked={mapType === 1}></input>
                <span className={styles.mapControlDropDownTitle}>Roadmap</span>
              </label>
            </div>

            <div className={styles.mapControlDropDownElements} onClick={() => setMapType(2)}>
              <label className={styles.mapControlDropDownRadio}>
                <input type="radio" className={styles.mapRadio} name="radio-colors" value="3" checked={mapType === 2}></input>
                <span className={styles.mapControlDropDownTitle}>Satellite</span>
              </label>
            </div>

            <div className={styles.mapControlDropDownElements} onClick={() => setMapType(3)}>
              <label className={styles.mapControlDropDownRadio}>
                <input type="radio" className={styles.mapRadio} name="radio-colors" value="4" checked={mapType === 3}></input>
                <span className={styles.mapControlDropDownTitle}>Navigation</span>
              </label>
            </div>

            <div className={styles.mapControlDropDownElements} onClick={() => setMapType(4)}>
              <label className={styles.mapControlDropDownRadio}>
                <input type="radio" className={styles.mapRadio} name="radio-colors" value="5" checked={mapType === 4}></input>
                <span className={styles.mapControlDropDownTitle}>Terrain</span>
              </label>
            </div>

            <div className={styles.mapControlDropDownElements} onClick={() => setMapType(5)}>
              <label className={styles.mapControlDropDownRadio}>
                <input type="radio" className={styles.mapRadio} name="radio-colors" value="6" checked={mapType === 5}></input>
                <span className={styles.mapControlDropDownTitle}>Traffic</span>
              </label>
            </div>
         
            </div>
          </div>

          <Tippy content='Map Layout'>
            <div><RiMap2Line className={styles.mapControlIcons} onClick={handleMapControl}/></div>
          </Tippy>
        
        </div>
        <div className={styles.mapControlDivider}></div>
        </>
    )
}

export default MapLayout
