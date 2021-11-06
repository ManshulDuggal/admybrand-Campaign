import React from "react";
import { BsMap } from "react-icons/bs";
import styles from "./mapfloatbutton.module.scss";
import MobileMap from "../MobileMap/MobileMap";

interface props {
  searchResults: any;
  mobileMap: boolean;
  setMobileMap: any;
  categoryname?: string | string[];
}

const MapFloatButton = ({
  categoryname,
  mobileMap,
  setMobileMap,
  searchResults,
}: props) => {
  const openMobileMap = () => {
    setMobileMap(!mobileMap);
  };

  return (
    <>
      <div
        className={`${mobileMap ? styles.mapFloatButton : styles.noMapControl}`}
        onClick={openMobileMap}
      >
        <BsMap className={styles.floatIconStyle} />
        Maps
      </div>

      <div
        className={`${!mobileMap ? styles.mobileMapSize : styles.noMapControl}`}
      >
        <MobileMap
          categoryname={categoryname}
          searchResults={searchResults}
          openMobileMap={mobileMap}
          setOpenMobileMap={setMobileMap}
        />
      </div>
    </>
  );
};

export default MapFloatButton;
