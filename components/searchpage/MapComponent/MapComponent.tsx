import { getCenter } from "geolib";
import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./mapcomponent.module.scss";
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import Image from "next/image";
import PrimaryBtnWhite from "../../buttons/PrimaryBtnWhite";
import PrimaryBtn from "../../buttons/PrimaryBtn";
import SuccessBadge from "../../badges/SuccessBadge";
import PromotionBadge from "../../badges/PromotionBadge";
import DefaultBadge from "../../badges/DefaultBadge";
import ActionButtons from "../ActionButtons/ActionButtons";
import {
  DigitToCurrency,
  discounthandler,
  myLoader,
  splitCords,
} from "../../helpers/searchpage";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { searchSingleItem } from "../../../store/actions/search";

//roadmap
//mapbox://styles/lavanya511/cksa3vd8c3own18p1dewmuliz
//pk.eyJ1IjoibGF2YW55YTUxMSIsImEiOiJja3NhM3A4djAxYnZlMzBvY2YwNHRtMGloIn0.YO4LRUBYvcNcXwj30at2WQ

//satellite
//mapbox://styles/lavanya511/cksh0eeoo5rqk17uq0g29il5t
//pk.eyJ1IjoibGF2YW55YTUxMSIsImEiOiJja3NhM3A4djAxYnZlMzBvY2YwNHRtMGloIn0.YO4LRUBYvcNcXwj30at2WQ

//Classic
//mapbox://styles/lavanya511/cksilixeb19q717k17sc2ttrj

//Navigation
//mapbox://styles/lavanya511/ckskbsrve4jvt17s3otm2hcnn

//Terrain
//mapbox://styles/lavanya511/ckskbyuu81kax17pjbg68wklj

//Traffic
//mapbox://styles/mapbox/traffic-night-v2

interface props {
  mapdata?: any;
  mapType: number;
  result?: any;
  categoryname: string | string[];
  viewport?: any;
  mapCenter?: any;
  setViewport?: any
}

function MapComponent({viewport, setViewport, mapCenter, categoryname, mapType, mapdata }: props) {
  const dispatch = useAppDispatch();
  const [selectedLocation, setSelectedLocation] = useState<{
    lng: number;
    lat: number;
  }>({ lng: null, lat: null });

  const mapTypes = [
    "mapbox://styles/lavanya511/cksilixeb19q717k17sc2ttrj",
    "mapbox://styles/lavanya511/cksa3vd8c3own18p1dewmuliz",
    "mapbox://styles/lavanya511/cksh0eeoo5rqk17uq0g29il5t",
    "mapbox://styles/lavanya511/ckskbsrve4jvt17s3otm2hcnn",
    "mapbox://styles/lavanya511/ckskbyuu81kax17pjbg68wklj",
    "mapbox://styles/mapbox/traffic-day-v2",
  ];
  const openPopupDetail = async (cords: { location: string }, id: string) => {
    try {
      setSelectedLocation({
        lng: splitCords(cords.location).longitude,
        lat: splitCords(cords.location).latitude,
      });
      await dispatch(
        searchSingleItem({
          category: categoryname,
          id,
        })
      );
    } catch (err) {
      throw err;
    }
  };
  const popupData: any = useAppSelector((state) => state.search.singleItem);
  const popupDataloading = useAppSelector((state) => state.search.itemLoading);
  const [originloaded, setOriginloaded] = useState(false);
  useEffect(() => {
    setViewport({
      ...viewport,
      latitude: mapCenter?.latitude,
      longitude: mapCenter?.longitude,
    });
    setOriginloaded(true);
  }, [mapCenter?.latitude, mapCenter?.longitude]); //eslint-disable-line
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {originloaded && (
        <ReactMapGL
          mapStyle={mapTypes[mapType]}
          mapboxApiAccessToken={process.env.mapbox_key}
          {...viewport}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
          {mapdata &&
            mapdata.map((res) => (
              <div key={res._id}>
                <Marker
                  longitude={splitCords(res.location).longitude}
                  latitude={splitCords(res.location).latitude}
                  offsetTop={-5}
                >
                  <span
                    className={styles.mapPointer}
                    onClick={() => openPopupDetail(res, res._id)}
                  >
                    ₹ {res.final_price}
                  </span>
                </Marker>

                {selectedLocation.lng ===
                  splitCords(res.location).longitude && (
                  <Popup
                    className={styles.popupContainer}
                    onClose={() =>
                      setSelectedLocation({ lng: null, lat: null })
                    }
                    closeButton={false}
                    closeOnClick={true}
                    latitude={splitCords(res.location).latitude}
                    longitude={splitCords(res.location).longitude}
                    offsetTop={50}
                    offsetLeft={40}
                  >
                    {!popupDataloading && (
                      <div className={styles.mapCard}>
                        <div className={styles.popupElements}>
                          <Image
                            height={127}
                            width={284}
                            src={popupData.thumbnail_url}
                            alt="img"
                            className={styles.popupImage}
                            loader={myLoader}
                          />
                          <PromotionBadge buttontext={"Promoted"} />
                        </div>
                        <div className={styles.popupHeading}>
                          <div className={styles.mapCardNameClass}>
                            <h2 className={styles.mapCardName}>
                              {popupData.name}
                            </h2>

                            <div className={styles.adsCardActionButton}>
                              <ActionButtons />
                            </div>

                            <div className={styles.mapCardImage}>
                              <span className={styles.adsCardAddress}>
                                {popupData.city}
                              </span>
                              <span className={styles.adsCardCategory}>
                                {categoryname}
                              </span>
                            </div>

                            <div className={styles.adsCardDefaultBadge}>
                              <DefaultBadge buttontext={"Fronlit"} />
                              <span
                                className={styles.adsCardDim}
                              >{`${popupData.width}ft X ${popupData.height}ft`}</span>
                            </div>
                            <div className={styles.adsCardPrice}>
                              <div className={styles.adsCardPriceTag}>
                                ₹ {DigitToCurrency(popupData.final_price)} per
                                sec
                                <span className={styles.adsCardStrike}>
                                  {`₹ ${DigitToCurrency(popupData.mrp_price)}`}
                                </span>
                                <SuccessBadge
                                  buttontext={`${discounthandler(
                                    popupData.mrp_price,
                                    popupData.final_price
                                  )}% off`}
                                />
                              </div>
                            </div>
                          </div>
                          <div className={styles.adsCardButtonClass}>
                            <div className={styles.adsCardButtonDiv}>
                              <PrimaryBtnWhite buttontext={"Add To Plan"} />
                              <PrimaryBtn buttontext={"Book Now"} />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {popupDataloading && <p>loading...</p>}
                  </Popup>
                )}
              </div>
            ))}
        </ReactMapGL>
      )}
    </div>
  );
}

export default MapComponent;
