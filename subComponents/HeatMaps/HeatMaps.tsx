import Tippy from "@tippy.js/react";
import { PriceHoverContent } from "../../elements/Legend/PricePremiumness/PricePremiumnessHover";
import { PopulationHoverContent } from "../../elements/Legend/Population/PopulationHover/PopulationHover";
import React, { useEffect, useState } from "react";
import HeatMapsOptions from "./HeatMapsOptions";
import { AiOutlineDotChart } from "react-icons/ai";
import styles from "./HeatMaps.module.scss";
import LegendOne from "../../elements/Legend/Population/LegendOne";
import LegendTwo from "../../elements/Legend/PointsOfInterest/LegendTwo";
interface props {
  mapControlHeatMaps: boolean;
  handleMapControl: any;
  handleCancel: any;
  legendVisible: boolean;
  setLegendVisible: any;
}

function HeatMaps({
  handleMapControl,
  mapControlHeatMaps,
  handleCancel,
  legendVisible,
  setLegendVisible,
}: props) {
  const [selectedOption, setSelectedOption] = useState(null);
  const options: { title: string; value: string }[] = [
    { title: "Points of interest", value: "1" },
    { title: "Population", value: "2" },
    { title: "Price Premiumness", value: "3" },
  ];
  const handleChange = (event) => {
    setLegendVisible(true);
    setSelectedOption(event.target.value);
    handleCancel();
  };
  useEffect(() => {
    if (!legendVisible) setSelectedOption(null);
  }, [legendVisible]);
  return (
    <>
      {selectedOption === "2" && legendVisible && (
        <div style={{ width: "0vw", height: "0vh" }}>
          <LegendOne hoverContent={PopulationHoverContent} />
        </div>
      )}
      {selectedOption === "1" && legendVisible && (
        <div style={{ width: "0vw", height: "0vh" }}>
          <LegendTwo />
        </div>
      )}
      {selectedOption === "3" && legendVisible && (
        <div style={{ width: "0vw", height: "0vh" }}>
          <LegendOne hoverContent={PriceHoverContent} />
        </div>
      )}
      <div className={styles.mapControlContainer}>
        <div
          className={`${
            mapControlHeatMaps ? styles.noMapControl : styles.mapControlHeatMaps
          }`}
          onMouseLeave={handleCancel}
        >
          <div
            className={styles.mapControlDropDownWide}
            onChange={handleChange}
          >
            {options.map((ele, index) => (
              <HeatMapsOptions
                key={index}
                option={selectedOption}
                title={ele.title}
                value={ele.value}
              />
            ))}
          </div>
        </div>
        <Tippy content="Heat Maps">
          <div>
            <AiOutlineDotChart
              className={styles.mapControlIcons}
              onClick={handleMapControl}
            />
          </div>
        </Tippy>
      </div>
      <div className={styles.mapControlDivider}></div>
    </>
  );
}

export default HeatMaps;
