import React from 'react';
import { useState } from 'react';
import PopUp from '../../elements/Popup/Popup';
import SortingKeys from './SortingKeys/SortingKeys';

const SortSearchResult = () => {
    const items=['Relevance','Price: Low to High','Price: High to Low','Popular First','Area: Low to High','Area: High to Low','Highest Discount','Visibility: Low to High','Visibility: High to Low','Newest First','Available Only']
    const [showPopUp,setShowPopUp] = useState(false);

    const onItemClickHandler = (item) => {
        console.log('item = '+item);
        
    }
    
    return(
        <div className="relative">
            <button onClick={()=>setShowPopUp((prevState)=>!prevState)}>Sort</button>
            <PopUp showPopup={showPopUp} handleCancel={()=>setShowPopUp(false)} items={items} itemClicked={onItemClickHandler} />
        </div>
    );
}

export default SortSearchResult;