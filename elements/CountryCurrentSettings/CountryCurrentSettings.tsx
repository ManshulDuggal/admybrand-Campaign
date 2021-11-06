/**
 * @author Rishi Raj
 * @email erishiraj@gmail.com
 * @create date 2021-09-30 15:05:41
 * @modify date 2021-09-30 15:05:41
 * @desc [description]
 */
import React from "react";
// Custom
import CurrentSetting from "./CurrentSetting";

// styles
import styles from './CountryCurrentSettings.module.scss';

interface props {
    country?: string;
    language?: string;
    currency?: string;
}

const CountryCurrentSettings = ({ country, language, currency }: props) => {

    return (
        <div className={styles.countryCurrentSettingSuggestedHeading}>
            Current Settings
            <div className={styles.countryCurrentSettingSuggested}>
                <CurrentSetting heading={"Country"} value={country} />
                <CurrentSetting heading={"Language"} value={language} />
                <CurrentSetting heading={"Currency"} value={currency} />
            </div>
        </div>
    )
}
export default CountryCurrentSettings;