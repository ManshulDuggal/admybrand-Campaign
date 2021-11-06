import React, { useState } from 'react';
import { TiMinus, TiPlus } from 'react-icons/ti';
import styles from "./zoombutton.module.scss";

interface props {
    viewport: any;
    setViewport: any;
}

function ZoomButton({viewport, setViewport}:props) {

    return (
        <div className={styles.zoomButton}>
            <div onClick={()=> setViewport({
                ...viewport,
                latitude: viewport.latitude  - 0.00051718266,
                longitude: viewport.longitude - 0.0007041737,
                zoom: viewport.zoom + 1
            })}>
                <TiPlus className={styles.zoomButtonIcon}/>
            </div>

            <div className={styles.zoomButtonBorder}></div>

            <div onClick={()=> setViewport({
                ...viewport,
                latitude: viewport.latitude + 0.00051718266,
                longitude: viewport.longitude + 0.0007041737,
                zoom: viewport.zoom - 1
            })}>
                <TiMinus className={styles.zoomButtonIcon}/>
            </div>
        </div>
    )
}

export default ZoomButton;
