import React, { useState } from 'react';
import styles from './styles/headerrowtwo.module.scss';
import { HeaderData } from "../../constants/api/filters";
import { AiOutlineSearch } from 'react-icons/ai';

function Headerrowtwo() {
    const [visibility, setVisibility] = useState(false);
    const [id, setID] = useState(0)

    const ShowData = (key:number) => {
        setID(key);
    }
    return (
            <div className={styles.hr2container}>   
                {HeaderData.map((item, index) => (
                    <div key={item.key} onMouseLeave={() => setVisibility(false)} >
                        <div onClick={() => {ShowData(item.key); setVisibility(!visibility);}} className={styles.hr2menu}>
                            <div className={`${(visibility && item.key == id) || (index == 0 && id == 0) ?  styles.hr2menutitleselected: styles.hr2menutitle}`}>
                                <div className={`${item.key == 0 ? 'block': 'hidden'}`}><AiOutlineSearch className='w-7 h-7 p-1 mr-0.5'/></div>      
                                    {item.name}
                            </div>
                        </div>
                        {visibility && item.key == id && 
                            <div className={styles.submenuContainer}  >
                                {item.submenu?.map((item) => (
                                    <div className={styles.subMenu} key={item.value}>
                                        <h4 className={styles.submenutitle} >{item.name}</h4>
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                ))}
            </div>
    )
}

export default Headerrowtwo
