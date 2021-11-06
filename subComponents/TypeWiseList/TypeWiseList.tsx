/**
 * @author Rishi Raj
 * @email erishiraj@gmail.com
 * @create date 2021-09-30 15:24:09
 * @modify date 2021-09-30 15:24:09
 * @desc [description]
 */
import React from "react";

// Styles 
import styles from './TypeWiseList.module.scss';

interface props {
    arrayData?: any,
    selectedItem?: string,
    onClick?: any
}

const TypeWiseList = ({ arrayData, selectedItem, onClick }: props) => {
    return (
        arrayData.map((i) => {
            return (
                <div
                    className={[
                        styles.typeWiseListGridElement,
                        selectedItem == i.name
                            ? styles.typeWiseListElementSelected
                            : "",
                    ].join(" ")}
                    key={i._id}
                    onClick={() => onClick(i.name)}
                >
                    <h1>{i.name}</h1>
                </div>
            );
        })
    )
}

export default TypeWiseList