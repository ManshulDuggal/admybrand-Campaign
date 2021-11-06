import React, { useState, useEffect } from "react";
import styles from "./styles/filters.module.scss";
import Image from "next/image";
import { icons } from "../../../../constants/icons/icons";
import { filterData } from "../../../../constants/api/filters";

interface Modal {
  filtersModal: boolean;
  setFiltersModal: any;
}

const Settings = (props: Modal) => {
  const [visibility, setVisibility] = useState(false);
  const [id, setId] = useState();
  const ShowMenu = (key: any) => {
    setId(key);
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image
          src={icons.close}
          alt="close"
          height={20}
          width={20}
          className="object-contain"
          onClick={() => props.setFiltersModal(!props.filtersModal)}
        />
        <h2 className={styles.filterHeading}>Filters</h2>
        <button>
          <h2 className={styles.clearButton}>Clear</h2>
        </button>
      </div>
      <div className={styles.body}>
        <div>
          {filterData.map((item) => (
            <>
              <div
                key={item.key}
                onClick={() => {
                  ShowMenu(item.key);
                  setVisibility(!visibility);
                }}
                className={styles.menu}
              >
                <h3 className={styles.menutitle}>{item.name}</h3>
                {item.submenu && visibility && item.key === id ? (
                  <Image
                    src={item.iconOpen}
                    alt="open"
                    height={15}
                    width={15}
                    className="object-contain"
                  />
                ) : (
                  <Image
                    src={icons.bottomarrow}
                    alt="close"
                    height={20}
                    width={20}
                    className="object-contain"
                  />
                )}
              </div>
              {visibility && item.key == id && (
                <div>
                  {item.submenu?.map((item) => (
                    <div key={item.value}>
                      <label className={styles.subMenu}>
                        <input
                          type="radio"
                          className={styles.filterRadio}
                          name="radio-colors"
                          value="2"
                        ></input>
                        <h4 className={styles.submenutitle}>{item.value}</h4>
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </>
          ))}
        </div>
        {/* apply button */}
        <div className={styles.applyButtonContainer}>
          <button className={styles.applyButton}>
            <h1 className={styles.apply}>Apply</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
