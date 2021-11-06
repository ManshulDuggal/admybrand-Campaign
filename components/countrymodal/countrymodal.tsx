import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { countryRoutes } from "../../constants/api/countryRoutes";
import CountryCurrentSettings from "../../elements/CountryCurrentSettings";
import TabSelect from "../../elements/TabSelect";
import ListWrapper from "../../subComponents/TypeWiseList/ListWrapper";
import styles from "./../../styles/modal.module.scss";

interface props {
  state?: boolean;
  setState?: any;
}

const CountryModal = ({ state, setState }: props) => {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  
  const [country, setCountry] = useState(true);
  const [language, setLanguage] = useState(false);
  const [currency, setCurrency] = useState(false);
  const [currentdata, setcurrentData] = useState({
    country: "India",
    language: "English",
    currency: "Indian Rupee",
  });
  const [modalValue, setModalValue] = useState("country");

  const changeCurrentData = (value: string) => {
  
    if (country === true) {
      setcurrentData({ ...currentdata, country: value });
      const countryCodeInfo=countryRoutes.filter(item=>value.toLowerCase()==item.countryName.toLowerCase())
      if(countryCodeInfo.length!==0) {
        const countryObj =  countryCodeInfo[0]; 
        const {code=''} = countryObj;
        console.log('code', countryObj);
        if(code){
          Router.push(asPath, asPath, { locale: code, shallow: true});
        }
      }
    }
    if (language === true) {
      setcurrentData({ ...currentdata, language: value });
    }
    if (currency === true) {
      setcurrentData({ ...currentdata, currency: value });
    }
  };
  
  useEffect(() =>{
    const countryCodeInfo=countryRoutes.filter(item=>locale.toLowerCase()==item.code.toLowerCase())
    console.log(currentdata,locale);
    if(countryCodeInfo.length!==0) {
      const countryObj =  countryCodeInfo[0]; 
      const {countryName} = countryObj;
      console.log("countryName",countryName)
      setcurrentData({ ...currentdata, country: countryName });
    }
  },[])

  const onSelectedTab = (isCountry: boolean, isLanguage: boolean, isCurrency: boolean, selectedModal: string) => {
    setCountry(isCountry);
    setLanguage(isLanguage);
    setCurrency(isCurrency);
    setModalValue(selectedModal);
  }

  const closeModalout = () => {
    setState(!state);
  };
  // console.log('f')
 
  
  return (
    <div className={`${state ? styles.hiddenModal : styles.displayModal}`}>
      {/* Modal Card*/}
      <div className={styles.card}>
        {/* heading */}
        <div className={styles.heading}>
          <div className={styles.headingText}>Customize ADmyBRAND</div>
          <AiOutlineClose
            className={styles.closeModal}
            onClick={closeModalout}
          />
        </div>

        {/* Suggested Settings */}
        <CountryCurrentSettings country={currentdata.country} language={currentdata.language} currency={currentdata.currency} />

        {/* Country Language Currency */}
        <div className={styles.subheadings}>
          <TabSelect className={`${country ? styles.setCountryStyle : styles.subheadingsElements
            }`}
            onClick={() => onSelectedTab(true, false, false, 'country')} text='Country' />
          <TabSelect className={`${language ? styles.setLanguageStyle : styles.subheadingsElements
            }`}
            onClick={() => onSelectedTab(false, true, false, 'language')} text='Language' />
          <TabSelect className={`${currency ? styles.setCurrencyStyle : styles.subheadingsElements
            }`}
            onClick={() => onSelectedTab(false, false, true, 'currency')} text='Currency' />
        </div>

        {/* Grid with choices */}
        <div className={styles.gridHeading}>Choose a {modalValue}</div>
        <ListWrapper language={language} country={country} currency={currency} selectedCountry={currentdata.country} selectedLanguage={currentdata.language} selectedCurrency={currentdata.currency} onClick={(e)=>{changeCurrentData(e)}} />
      </div>
    </div>
  );
};
export default CountryModal;