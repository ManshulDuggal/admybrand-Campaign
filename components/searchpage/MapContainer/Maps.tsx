import React from "react";
import MapControls from "../MapControls/MapControls";
import styles from "./maps.module.scss";
import { CgArrowsShrinkH, CgArrowsMergeAltH, CgArrowLeftR, CgArrowRightR } from 'react-icons/cg';
import { useState } from 'react';
import MapComponent from '../MapComponent/MapComponent';
import ZoomButton from '../ZoomButton/zoombutton';
import { getCenter } from "geolib";
import { splitCords } from "../../helpers/searchpage";

interface props {
  mapsize: boolean;
  mapFull: boolean;
  setMapsize: any;
  setMapFull: any;
  mapdata?: any
  categoryname: string | string[];
}

const Maps = ({
  categoryname,
  mapsize,
  mapFull,
  mapdata,
  setMapsize,
  setMapFull,
}: props) => {

  const changeMapSize = () => {
    setMapsize(!mapsize);
  };

  const changeMapToFull = () => {
    setMapFull(!mapFull);
  }

  const mapCoordinates =
    mapdata &&
    mapdata.filter(Boolean).map((result) => {
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

  const [mapType, setMapType] = useState(0);

  return (
    <div
      className={`${mapsize
          ? styles.mapSizeSmall
          : mapFull
            ? styles.mapSizeFull
            : styles.mapSizeBig
        }`}
    >
      <div className={styles.googlemaps}>
        <MapComponent viewport={viewport} setViewport={setViewport} mapCenter={mapCenter}  mapType={mapType} mapdata={mapdata} categoryname={categoryname}/>
        <div>
          <CgArrowsShrinkH className={`${mapsize ? styles.mapExpand : styles.notMapExpand}`} onClick={changeMapSize} />
          <CgArrowLeftR className={`${!mapsize && !mapFull ? styles.mapArrow : styles.notMapArrow}`} onClick={changeMapToFull} />
          <span className={`${!mapsize && mapFull ? styles.mapArrowClose : styles.notMapArrow}`} onClick={changeMapToFull}><CgArrowRightR className={styles.mapsIconStyle} /> Show List </span>
          <CgArrowsMergeAltH className={`${!mapsize && !mapFull ? styles.mapShrink : styles.notMapShrink}`} onClick={changeMapSize} />
        </div>
        <div>
        <ZoomButton viewport={viewport} setViewport={setViewport} />
        </div>
      </div>
      <div className={styles.mapsContainer}>
        <MapControls mapsize={mapsize} setMapsize={setMapsize} mapType={mapType} setMapType={setMapType} />
      </div>
    </div>
  );
};

export default Maps;
