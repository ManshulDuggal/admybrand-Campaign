/**
 * @author Rishi Raj
 * @email erishiraj@gmail.com
 * @create date 2021-09-30 16:18:04
 * @modify date 2021-09-30 16:18:04
 * @desc [description]
 */
import React, { useEffect } from "react";
import TypeWiseList from ".";

// Constant Data
import { currencyData } from "../../constants/api/modalData";

// Actions
import { getcountries } from "../../store/actions/country";
import { getlanguages } from "../../store/actions/language";

import { useAppDispatch, useAppSelector } from "../../store/store";

// Styles
import styles from './TypeWiseList.module.scss';

interface props {
    country?: boolean;
    language?: boolean;
    currency?: boolean;
    onClick?: any;
    selectedCountry?: string;
    selectedLanguage?: string;
    selectedCurrency?: string;
}

const ListWrapper = ({ country, language, currency, onClick, selectedCountry, selectedLanguage, selectedCurrency }: props) => {
    const dispatch = useAppDispatch();

    const fetchData = async () => {
        await dispatch(getcountries());
        await dispatch(getlanguages());
    };
    useEffect(() => {
        fetchData();
    }, []); // eslint-disable-line

    const countrydata = useAppSelector((state) => state.country.country);
    const languagedata = useAppSelector((state) => state.language.language);

    return (
        <div className={styles.typeWiseListWrapperGridContainer}>
            {country
                ?
                <TypeWiseList arrayData={countrydata} selectedItem={selectedCountry} onClick={onClick} />
                : null}
            {language
                ?
                <TypeWiseList arrayData={languagedata} selectedItem={selectedLanguage} onClick={onClick} />
                : null}
            {currency
                ?
                <TypeWiseList arrayData={currencyData} selectedItem={selectedCurrency} onClick={onClick} />
                : null}
        </div>
    )
}

export default ListWrapper;