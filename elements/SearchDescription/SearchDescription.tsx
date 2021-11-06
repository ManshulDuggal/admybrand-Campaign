/**
 * @author Rishi Raj
 * @email erishiraj@gmail.com
 * @create date 2021-09-30 16:57:13
 * @modify date 2021-09-30 16:57:13
 * @desc [description]
 */

import React from "react";

// Custom
import { searchdescription } from "../../constants/api/api";

// Styles 
import styles from './SearchDescription.module.scss';

interface props {
    itemstate: number
}
const SearchDescription = ({ itemstate }: props) => {
    return (
        <section className={styles.searchdescription}>
            {searchdescription.map((item, index) => {
                return (
                    index === itemstate && (
                        <p key={index} className={styles.discription}>
                            {item}
                        </p>
                    )
                );
            })}
        </section>
    )
}
export default SearchDescription;