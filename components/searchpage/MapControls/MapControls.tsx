import React from "react";
import {
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { MdTerrain } from "react-icons/md";
import styles from "./mapcontrols.module.scss";
import { useState } from "react";
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import SearchLocality from "../../../subComponents/SearchLocality/SearchLocality";
import AddPlace from "../../../subComponents/AddPlace/AddPlace";
import ViaAnalytics from "../../../subComponents/ViaAnalytics/ViaAnalytics";
import MapLayout from "../../../subComponents/MapLayout/MapLayout";
import HeatMaps from "../../../subComponents/HeatMaps/HeatMaps";
import Views from "../../../subComponents/Views/Views";
import ViewStatisticalData from "../../../subComponents/ViewStatisticalData/ViewStatisticalData";

interface props {
  mapsize: boolean;
  setMapsize: any;
  mapType: number;
  setMapType: any;
}

const MapControls = ({ mapsize, setMapsize, mapType, setMapType }: props) => {
  const [opencontrol, setOpencontrol] = useState(false);

  const openMapControl = () => {
    setOpencontrol(!opencontrol);
  };

  const [legendVisible, setLegendVisible] = useState(true);
  const [mapControlLocality, setMapControlLocality] = useState(true);
  const [mapControlAddPlace, setMapControlAddPlace] = useState(true);
  const [mapControlLayout, setMapControlLayout] = useState(true);
  const [mapControlHeatMaps, setMapControlHeatMaps] = useState(true);
  const [mapControlViews, setMapControlViews] = useState(true);
  const [mapControlVIA, setMapControlVIA] = useState(true);
  const [mapControlStatisticalData, setMapControlStatisticalData] = useState(true);

  const handleMapControlCurrentLocation = () => {
    alert("To Be changed to GOOGLE allow/block location pop-up");
  };

  const handleMapControl = (
    isLocality: boolean,
    isAddPlace: boolean,
    isLayout: boolean,
    isHeatMaps: boolean,
    isViews: boolean,
    isVia: boolean,
    isStatsData: boolean
  ) => {
    if (
      !(isLocality && isAddPlace && isLayout && isViews && isVia && isStatsData) // To make legend disappear when any other component is opened
    )
      setLegendVisible(false);

    setMapControlLocality(isLocality);
    setMapControlAddPlace(isAddPlace);
    setMapControlLayout(isLayout);
    setMapControlHeatMaps(isHeatMaps);
    setMapControlViews(isViews);
    setMapControlVIA(isVia);
    setMapControlStatisticalData(isStatsData);
  };

  return (
    <>
      <div
        className={`${
          !opencontrol ? styles.noMapControl : styles.openMapControlStyle
        }`}
      >
        <div className={styles.mapControlBar}>
          {/* Search by Current Location */}
          <Tippy content="Search by Current Location">
            <div>
              <FiMapPin
                className={styles.mapControlIcons}
                onClick={handleMapControlCurrentLocation}
              />
            </div>
          </Tippy>
          <div className={styles.mapControlDivider}></div>

          {/* Search by locality */}
          <SearchLocality
            handleMapControl={() =>
              handleMapControl(false, true, true, true, true, true, true)
            }
            mapControlLocality={mapControlLocality}
            handleCancel={() =>
              handleMapControl(true, true, true, true, true, true, true)
            }
          />

          {/* Add Place */}
          <AddPlace
            handleMapControl={() =>
              handleMapControl(true, false, true, true, true, true, true)
            }
            mapControlAddPlace={mapControlAddPlace}
            handleCancel={() =>
              handleMapControl(true, true, true, true, true, true, true)
            }
          />

          {/* Map Layout */}
          <MapLayout
            handleMapControl={() =>
              handleMapControl(true, true, false, true, true, true, true)
            }
            mapControlLayout={mapControlLayout}
            handleCancel={() =>
              handleMapControl(true, true, true, true, true, true, true)
            }
            mapType={mapType}
            setMapType={setMapType}
          />

          {/* HeatMap */}
          <HeatMaps
            handleMapControl={() =>
              handleMapControl(true, true, true, false, true, true, true)
            }
            legendVisible={legendVisible}
            setLegendVisible={setLegendVisible}
            mapControlHeatMaps={mapControlHeatMaps}
            handleCancel={() =>
              handleMapControl(true, true, true, true, true, true, true)
            }
          />

          {/* Views */}
          <Views
            handleMapControl={() =>
              handleMapControl(true, true, true, true, false, true, true)
            }
            mapControlViews={mapControlViews}
            handleCancel={() =>
              handleMapControl(true, true, true, true, true, true, true)
            }
          />

          {/* VIA Analytics */}
          <ViaAnalytics
            handleMapControl={() =>
              handleMapControl(true, true, true, true, true, false, true)
            }
            mapControlVIA={mapControlVIA}
            handleCancel={() =>
              handleMapControl(true, true, true, true, true, true, true)
            }
          />

          {/* View Statistical data - NOT FUNCTIONAL YET */}
          <ViewStatisticalData 
            onClickEveny={setMapControlStatisticalData} 
            handleMapControl={()=>handleMapControl(true, true, true, true, true, true, false)} 
            mapControlStatisticalData={mapControlStatisticalData} 
            handleCancel={()=>handleMapControl(true, true, true, true, true, true, true)}/>
        </div>

        {/* Map Control Arrow Button */}
        <div className={styles.arrowContainer}>
          <div>
            <AiOutlineRight
              className={styles.mapControlArrow}
              onClick={openMapControl}
            />
          </div>
        </div>
      </div>

      {/* Map Control Arrow Button Expand */}
      <span
        className={`${
          !opencontrol ? styles.mapControlBadge : styles.noMapControl
        }`}
        onClick={openMapControl}
      >
        <AiOutlineLeft className={styles.mapControlIconLeft} /> Search Controls
      </span>
    </>
  );
};

export default MapControls;
