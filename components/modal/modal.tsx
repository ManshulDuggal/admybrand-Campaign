import React from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
  countriesData,
  currencyData,
  languagesData,
} from "../../constants/api/modalData";
import styles from "./../../styles/modal.module.scss";

interface props {
  state?: boolean;
  setState?: any;
}

const Modal = ({ state, setState }: props) => {
  const [country, setCountry] = useState(true);
  const [language, setLanguage] = useState(false);
  const [currency, setCurrency] = useState(false);
  const [modalValue, setModalValue] = useState("country");

  const changeToCountry = () => {
    setCountry(true);
    setLanguage(false);
    setCurrency(false);
    setModalValue("country");
  };

  const changeToLanguage = () => {
    setLanguage(true);
    setCountry(false);
    setCurrency(false);
    setModalValue("language");
  };

  const changeToCurrency = () => {
    setLanguage(false);
    setCountry(false);
    setCurrency(true);
    setModalValue("currency");
  };

  return (
    <div className={`${state ? styles.main : styles.maintwo}`}>
      {/* Modal Card*/}
      <div className={styles.card}>
        {/* heading */}
        <div className={styles.heading}>
          <div className={styles.headingText}>Customized ADmyBRAND</div>
          <AiOutlineClose
            className={styles.closeModal}
            onClick={() => setState(!state)}
          />
        </div>

        {/* Suggested Settings */}
        <div className={styles.suggestedHeading}>
          Suggested Settings
          <div className={styles.suggestedSettings}>
            <div className={styles.suggestedElements}>
              <span className={styles.suggestedElementsHeading}>India</span>
              <span className={styles.suggestedElementsCategory}>Country</span>
            </div>
            <div className={styles.suggestedElements}>
              <span className={styles.suggestedElementsHeading}>English</span>
              <span className={styles.suggestedElementsCategory}>Language</span>
            </div>
            <div className={styles.suggestedElements}>
              <span className={styles.suggestedElementsHeading}>
                Indian Rupee
              </span>
              <span className={styles.suggestedElementsCategory}>Currency</span>
            </div>
          </div>
        </div>

        {/* Country Language Currency */}
        <div className={styles.subheadings}>
          <div className={styles.subheadingsElements} onClick={changeToCountry}>
            Country
          </div>
          <div
            className={styles.subheadingsElements}
            onClick={changeToLanguage}
          >
            Language
          </div>
          <div
            className={styles.subheadingsElements}
            onClick={changeToCurrency}
          >
            Currency
          </div>
        </div>

        {/* Grid with choices */}
        <div className={styles.gridHeading}>Choose a {modalValue}</div>
        <div className={styles.gridContainer}>
          {country
            ? countriesData.map((i, index) => {
                return (
                  <div className={styles.gridElement} key={index}>
                    <h1>{i.name}</h1>
                  </div>
                );
              })
            : null}

          {language
            ? languagesData.map((i, index) => {
                return (
                  <div className={styles.gridElement} key={index}>
                    <h1>{i.name}</h1>
                  </div>
                );
              })
            : null}

          {currency
            ? currencyData.map((i, index) => {
                return (
                  <div className={styles.gridElement} key={index}>
                    <h1>{i.name}</h1>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};
export default Modal;
