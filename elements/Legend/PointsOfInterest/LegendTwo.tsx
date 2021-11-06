import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { options } from "./Options";
import Checkboxes from "./Checkboxes";
import styles from "./LegendTwo.module.scss";

const LegendTwo = () => {
  const [selectedOption, setSelecetedOption] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const toggleShowOption = () => setShowOptions((prevState) => !prevState);
  const handleChange = (event) => {
    setSelecetedOption(event.target.value);
    console.log("Event triggered");
  };
  return (
    <div
      className={`${styles.legendAccordion} ${
        showOptions ? styles.active : ``
      }`}
    >
      <div
        className={`${styles.legendAccordionLabel} ${
          showOptions ? styles.active : ``
        }`}
      >
        Points of interest
        <div className={styles.arrowContainer}>
          <IoMdClose className={styles.close} onClick={toggleShowOption} />
        </div>
      </div>
      <div
        className={`${styles.legendAccordionContent} ${
          showOptions ? styles.active : ``
        }`}
      >
        {
          /* Radio button options */
          options.map((option, index) => (
            <React.Fragment key={index}>
              <div className={styles.options}>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="points_of_interest"
                  value={option.label}
                />
                <label>{option.label}</label>
              </div>
              {selectedOption === option.label && (
                <div className={styles.subOptions}>
                  <Checkboxes options={option.checkBoxOptions} />
                </div>
              )}
            </React.Fragment>
          ))
        }
        {/* Checkboxes for selected Radio button */}
      </div>
    </div>
  );
};

export default LegendTwo;
