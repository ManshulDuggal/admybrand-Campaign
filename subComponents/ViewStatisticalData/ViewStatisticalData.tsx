import Tippy from '@tippy.js/react'
import React from 'react'
import { useState } from 'react'
import { AiOutlineBarChart, AiOutlineClose } from 'react-icons/ai'
import { MdTerrain } from 'react-icons/md'
import styles from './ViewStatisticalData.module.scss';
import Modal from '../../elements/ModelComp/ModelComp';
import SelectableButton from '../../elements/SelectableButton/SelectableButton'
import InputBox from '../../elements/InputBox.tsx/InputBox'

interface props{
    handleMapControl:any;
    mapControlStatisticalData: boolean;
    handleCancel: any;
    onClickEveny?: any
}



function ViewStatisticalData({handleMapControl, mapControlStatisticalData, handleCancel, onClickEveny}: props) {
    
    const [residentPopulation,setResidentPopulation] = useState(false);
    const [gender,setGender] = useState('male');
    const [startAge,setStartAge] = useState('');
    const [endAge,setEndAge] = useState('');
    const [displayCheckbox,setDisplayCheckbox] = useState(true);

    const resetModalHandler = ()=>{
        setResidentPopulation(false);
        setGender('male');
        setStartAge('');
        setEndAge('');
        setDisplayCheckbox(true);
    }

    const inputField = (placeholder,showValue,changeValue) => {
        return(
            <input type="number"  
                className={styles.inputBox}
                placeholder={placeholder}
                value={showValue}
                onChange={(event)=>changeValue(event.target.value)}
            />
        );
    }
    
      const showModal = () =>{
          return(
            <Modal isClosed={mapControlStatisticalData}>                  
            <div className={styles.heading}>
                <div className={styles.headingText}>Statistical Data</div>
                <AiOutlineClose
                    className={styles.closeModal}
                    onClick={handleCancel}
                />
            </div>
            <hr></hr>
            <div style={{textAlign:'left',padding:'16px'}}>
                <div className={styles.divSpaceBottom}>
                <p>Please select the data to be displayed on the map</p>             
                <h2 className={styles.labelHeading}>Type of Data</h2>
                <SelectableButton selected={residentPopulation} clicked={()=>setResidentPopulation(prevState=>!prevState)}>Resident Population</SelectableButton>
                </div>
                
                <div className={styles.divSpaceTopAndBottom}>
                <h2 className={styles.labelHeading}>Gender</h2>
                <SelectableButton selected={gender=='male'} clicked={()=>setGender('male')}>Male</SelectableButton>
                <SelectableButton selected={gender=='female'} clicked={()=>setGender('female')}>Female</SelectableButton>
                </div>
                <div className={styles.divSpaceTopAndBottom}>
                <h2 className={styles.labelHeading}>Age Range</h2>
                
                {inputField("Enter starting age range",startAge,setStartAge)}
                {inputField("Enter ending age range",endAge,setEndAge)}
                </div>
                <p>
                <input type="checkbox" checked={displayCheckbox} onClick={()=>setDisplayCheckbox(prevState=>!prevState)}></input>
                &nbsp;Display numerical value on the map
                </p>              
                <button className={styles.btn} onClick={resetModalHandler}>Reset</button>
                <button className={styles.btnClicked}>Apply</button>
            </div> 
        </Modal>
        
          )
      }
                        
    return (
        <>
                
                <Tippy content="View Statistical Data">
                <div>
                    <MdTerrain
                    className={styles.mapControlIcons}
                    onClick={()=>onClickEveny(!mapControlStatisticalData)}
                    />
                </div>
                </Tippy>
               {showModal()}
            
            <div className={styles.mapControlDivider}></div>


        </>
    )
}

export default ViewStatisticalData
