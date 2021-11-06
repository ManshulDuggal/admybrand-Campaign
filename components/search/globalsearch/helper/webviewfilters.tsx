import { WebFilterData } from "../../../../constants/api/filters";
import React from "react";
import styles from "./styles/webviewfilters.module.scss";
import { useState } from "react";
import Image from "next/image";
import { icons } from "../../../../constants/icons/icons";
import { BiChevronDown, BiChevronUp, BiSort } from 'react-icons/bi';
import SortSearchResult from "../../../SortSearchResult/SortSearchResult";

interface props{
    filterposition:boolean;
    filterpositionShrink: boolean;
}
const Webfilter = ({filterposition, filterpositionShrink}:props) => {
    const [visibility, setVisibility] = useState(false);
    const [id, setID] = useState(0)
    
    const ShowData = (key:number) => {
        setID(key);
    }
    return(
      <div className={`${
            filterposition
              ? styles.filter:
              styles.filterLeft
          }`}>

        <div className={styles.container}>   
                {WebFilterData.map((item) => (
                    <div key={item.key} onMouseLeave={() => setVisibility(false)}>
                        <div  onClick={() => {ShowData(item.key); setVisibility(!visibility);}} className={styles.menu}>
                            <span className={styles.menutitle}>{item.name}</span>
                            {item.submenu && visibility && item.key === id ? (
                                <BiChevronUp className='h-8 w-8 p-1'/>
                            ): (
                                <BiChevronDown className='h-8 w-8 p-1'/>
                            )}
                        </div>
                        {visibility && item.key == id && 
                            <div className={styles.submenuContainer}>
                                {item.submenu?.map((item) => (
                                    <div className={styles.subMenu} key={item.value}>
                                        <h4 className={styles.submenutitle} >{item.name}</h4>
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                ))}
                <div className={styles.menu}>
                     <span className={styles.menutitle}>Audience Profile</span>
                </div>
                <div className={styles.menu}>
                     <span className={styles.menutitle}>More Filters</span>
                </div>
                    <div className={styles.sortbuttonContainer}>
                        <button>
                            <BiSort/>
                        </button>
                        {/* <h2 className={styles.sorttitle}>Sort</h2> */}
                        <SortSearchResult/>
                    </div>
  
        </div>
    </div>
  );
};
export default Webfilter;
