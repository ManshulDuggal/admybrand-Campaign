import React, { useState, useEffect } from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import styles from "../../normalsearchouter/styles/normalsearchouter.module.scss";
import { motion } from "framer-motion";
import { svgs } from "../../../../constants/icons/icons";
import Image from "next/image";
const timeLonging = ["Weekend", "Week", "Month"];


interface SearchData {
  category: string;
  location: string;
  startDate: string;
  endDate: string;
  categoryId: string;
  weekBasis: string;
  monthBasis: string;
}
interface Props {
  searchData: SearchData;
  calFeatureVisibility:boolean;
  selectedMonths : any;
  columns:Number,
  setSelectedMonths(arg:any):void;
  setCalFeatureVisibility(arg: boolean):void;
  setSearchData(arg: Object): void;
  showCalendarLayout(arg: Object): void;
}

const Calendar: React.FC<Props> = ({
  searchData,
  setSearchData,
  showCalendarLayout,
  setCalFeatureVisibility,
  calFeatureVisibility,
  selectedMonths,
  columns,
  setSelectedMonths
}) => {
  const [focused, setFocused] = useState("startDate");
  const [calendarLayoutIsVisible, setCalendarLayoutVisible] = useState(true);
  const [isCalendarIsVisible, setCalendarVisible] = useState(true);
  const [isFlexibleVisible, setFlexibilityVisible] = useState(false);
  const initialMonths = selectedMonths.map(item=>{
    return{
      id:item.id,
      month:item.month,
      isChecked:false
    }
  })
  const [hideLayout, setHideLayout] = useState(false);
  const [monthTrigger, setMonthTrigger] = useState(false);
  
  const updateMonths = (id) => {
    const updateMonth = selectedMonths.map((item) => {
      if (item.id === id) {
        item.isChecked = !item.isChecked;
      }
      return item;
    });
    setSelectedMonths(updateMonth);
    const updatedMonths = selectedMonths.filter(item=>item.isChecked === true);
    const updatedMonthSingleFormat = updatedMonths.map(item=>item.month).toString();
    setSearchData({ ...searchData, monthBasis: updatedMonthSingleFormat });
    
  };
  // useEffect(() => {
  //   window.addEventListener("click", function (e: any) {
  //     if (document.getElementById("calender") == null) {
  //       return;
  //     }
  //     if (
  //       document.getElementById("calender") != null &&
  //       document.getElementById("calender").contains(e.target)
  //     ) {
  //       // Clicked in box
  //     } else {
  //       if (
  //         !(
  //           document.getElementById("btnAddDate").contains(e.target) ||
  //           document.getElementById("btnEndDate").contains(e.target)
  //         )
  //       ) {
  //         console.log("CLicked outside");
  //         showCalendarLayout(false);
  //         return;
  //       }
  //       // Clicked outside the box
  //     }
  //   });
  // }, []);

  return (
    <div
      className={styles.calendarWrapper}
      style={hideLayout ? { display: "none" } : {}}
    >
      {calendarLayoutIsVisible && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { ease: "easeInOut" } }}
          className={styles.calendarLayoutWrapperAnimated}
        >
          <div id="calender" className={styles.calendarLayoutRelative}>
            <div className={styles.calendarLayoutRounded}>
              <button
                className={`${styles.calendarLayoutTabBase}  ${
                  calFeatureVisibility
                    ? `bg-white`
                    : `bg-transparent hover:bg-gray-300`
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCalFeatureVisibility(true);
                  setSearchData({...searchData, weekBasis:"", monthBasis:""})
                  setSelectedMonths(initialMonths)
                  
                }}
              >
                {`Calendar`}
              </button>
              <button
                className={`${styles.calendarLayoutTabBase}  ${
                  !calFeatureVisibility
                    ? `bg-white`
                    : `bg-transparent hover:bg-gray-300`
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setFocused("startDate");
                  setCalFeatureVisibility(false);
                  setSearchData({...searchData, startDate:null, endDate:null})
                }}
              >
                {`I'm flexible`}
              </button>
            </div>
            {calFeatureVisibility 
              ? (() => (
                  <>
                    <DateRangePicker
                      startDate={searchData.startDate} // momentPropTypes.momentObj or null,
                      startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                      endDate={searchData.endDate} // momentPropTypes.momentObj or null,
                      endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                      noBorder={true}
                      onDatesChange={({ startDate, endDate }) => {
                        setSearchData({ ...searchData, startDate, endDate });
                        if (startDate !== null && endDate !== null) {
                          setHideLayout(true);
                          showCalendarLayout(false);
                        }
                      }} // PropTypes.func.isRequired,
                      numberOfMonths={columns}
                      focusedInput={focused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                      onFocusChange={(focusedInput) => {
                        if (!focusedInput) return;
                        console.log(isCalendarIsVisible, "focusedInput"); // doesn't update the focusedInput if it is trying to close the DRP
                        setFocused(focusedInput);
                      }} // PropTypes.func.isRequired,
                    />
                  </>
                ))()
              : (() => (
                  <div className={styles.flexibleLayout}>
                    <h1>How long would you like to advertise ?</h1>
                    <div className={styles.advertDurationTabContainer}>
                      {timeLonging.map((item) => {
                        return (
                          <div
                            className={
                              item === searchData.weekBasis
                                ? styles.advertDurationTabActive
                                : styles.advertDurationTab
                            }
                            key={Math.random()}
                          >
                            <label htmlFor={item}>{item}</label>
                            <input
                              name="timeInterval"
                              type="radio"
                              value={item}
                              id={item}
                              onChange={(e) => {                            
                                setSearchData({
                                  ...searchData,
                                  weekBasis: e.target.value,
                                });
                              }}
                              checked={searchData.weekBasis === item}
                            />
                          </div>
                        );
                      })}
                    </div>
                    <h1>When do you like to advertise?</h1>
                    <div className={styles.advertMonthTileGridContainer}>
                      {selectedMonths.map((item) => {
                        return (
                          <div
                            className={
                              item.isChecked
                                ? styles.advertMonthTileActive
                                : styles.advertMonthTile
                            }
                            key={Math.random()}
                          >
                            <label htmlFor={`advertMonth-${item.month}`}>
                              <div
                                className={
                                  item.isChecked
                                    ? styles.advertMonthTileLabelContainerActive
                                    : styles.advertMonthTileLabelContainer
                                }
                              >
                                <Image
                                  width={40}
                                  height={40}
                                  src={
                                    item.isChecked
                                      ? svgs.calendarPink
                                      : svgs.calendarGray
                                  }
                                />
                                {item.month}
                              </div>
                            </label>
                            <input
                              type="checkbox"
                              value={item.month}
                              name={item.month}
                              id={`advertMonth-${item.month}`}
                              onChange={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                updateMonths(item.id);
                                console.log(`${searchData.weekBasis} in ${searchData.monthBasis}`);
                              }}
                              checked={item.isChecked}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))()}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Calendar;
