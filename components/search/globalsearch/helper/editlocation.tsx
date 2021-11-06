import React, { useState } from "react";
import { icons } from "../../../../constants/icons/icons";
import Image from "next/image";
import styles from "./styles/editlocation.module.scss";
import { BiMicrophone, BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/router";
interface Modal {
  editLocation: boolean;
  setEditLocation: any;
}
const Editlocation = (props: Modal) => {
  const data = [
    { key: 1, name: "Mumbai" },
    { key: 2, name: "Bangalore" },
    { key: 3, name: "Hyderabad" },
    { key: 4, name: "Delhi" },
    { key: 5, name: "Chennai" },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.editLocationBox}>
        <div onClick={() => props.setEditLocation(!props.editLocation)}>
          <BiArrowBack className={styles.globalsearchArrow} />
        </div>
        <input
          className={styles.inputBox}
          type="text"
          placeholder="Enter Location"
        ></input>
        <div className={styles.mic_close_container}>
          <Image
            src={icons.mic}
            alt="mic"
            height={24}
            width={24}
            objectFit={"cover"}
          />
          <button onClick={() => props.setEditLocation(!props.editLocation)}>
            <Image
              src={icons.close}
              alt="close"
              height={24}
              width={24}
              objectFit={"cover"}
            />
          </button>
        </div>
      </div>
      <h2 className={styles.recentSearchTitle}>Recent Searches</h2>
      <div className={styles.recentSearche}>
        {data.map((item) => (
          <div className={styles.recentSearchItem} style={{}} key={item.key}>
            <div className={styles.reloadSearchContainer}>
              <Image
                src={icons.reload}
                alt="reload"
                height={15}
                width={15}
                objectFit={"cover"}
              />
            </div>
            <h4 className={styles.locationName} key={item.key}>
              {item.name}
            </h4>
            <div className={styles.searchCancel}>
              <Image
                src={icons.close}
                alt="clear"
                height={24}
                width={24}
                objectFit={"cover"}
              />
            </div>
          </div>
        ))}
        <p className={styles.clearsearch}>Clear All Searches</p>
      </div>
    </div>
  );
};
export default Editlocation;
