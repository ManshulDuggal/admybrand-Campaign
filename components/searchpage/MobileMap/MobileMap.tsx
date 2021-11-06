import React from "react";
import MapControls from "../MapControls/MapControls";
import styles from "./mobilemap.module.scss";
import { AiOutlineClose, AiOutlineFullscreen, AiOutlineFullscreenExit, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useState } from 'react';
import MapComponent from '../MapComponent/MapComponent';
import ZoomButton from '../ZoomButton/zoombutton';
import { splitCords } from "../../helpers/searchpage";
import { getCenter } from "geolib";

interface props {
  openMobileMap: boolean;
  setOpenMobileMap: any;
  searchResults: any;
  categoryname?: string | string[];
}

const MobileMap = ({
  categoryname,
  searchResults,
  openMobileMap,
  setOpenMobileMap,
}: props) => {
  const closeMobileMap = () => {
    setOpenMobileMap(!openMobileMap);
  };

  const [mapType, setMapType] = useState(0);

  const mapCoordinates =
    searchResults &&
    searchResults.filter(Boolean).map((result) => {
      if (result.location != "") {
        const { longitude, latitude } = splitCords(result.location);
        return {
          longitude: longitude,
          latitude: latitude,
        };
      }
    });
  const mapCenter: any = getCenter(mapCoordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: mapCenter.latitude,
    longitude: mapCenter.longitude,
    zoom: 14,
  });


  return (
    <div className={styles.mobileMapSize}>
      <div className={styles.googlemaps}>
        <MapComponent viewport={viewport} setViewport={setViewport} categoryname={categoryname} mapdata={searchResults} mapType={mapType}/>
      <div>
        <AiOutlineClose className={styles.mobileMapClose} onClick={closeMobileMap}/>
      </div>
    </div>
    <div className={styles.mobileMapContainer}>
        <MapControls mapsize setMapsize mapType={mapType} setMapType={setMapType}/>
    </div>
    </div>
  );
};

export default MobileMap;
