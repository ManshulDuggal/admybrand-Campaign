import React from "react";
import styles from "../../normalsearchouter/styles/normalsearchouter.module.scss";

interface propobject {
  _id: number;
  name: string;
  code: string;
}
interface props {
  data?: any[];
  customstyles?: string;
  loading: boolean;
  rejected: boolean;
  value: string;
  onSelect?: (component: propobject) => void;
}

const LocationDropdown = ({
  customstyles,
  data,
  loading,
  rejected,
  onSelect,
  value,
}: props) => {
  const dummydata = [
    { _id: 0, name: "Delhi", code: "DEL" },
    { _id: 1, name: "Hyderabad", code: "HYD" },
    { _id: 2, name: "Mumbai", code: "MUM" },
    { _id: 3, name: "Banglore", code: "BLR" },
    { _id: 4, name: "Kolkata", code: "KOL" },
    { _id: 5, name: "Chennai", code: "CHE" },
    { _id: 6, name: "Pune", code: "PNE" },
    { _id: 7, name: "Ahemdabad", code: "AMD" },
  ];
  const Data = value !== "" && data && data.length !== 0 ? data : dummydata;

  return (
    <div className={`${styles.locationdropdown} ${customstyles}`}>
      <div className=" w-full">
        {loading && <p>loading...</p>}
        {rejected && <p>Not found</p>}
        {!rejected &&
          Data.map((component) => (
            <div
              onClick={() => (onSelect ? onSelect(component) : null)}
              key={component._id}
              className={styles.locationname}
            >
              <h1 className="font-inter ">{component.name}</h1>
              <h1 className="font-inter ">{component.code}</h1>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LocationDropdown;
