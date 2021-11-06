import React from 'react';
import styles from './SelectableButton.module.scss';

const SelectableButton = (props) => {
    return(
        <button className={props.selected?styles.btnClicked:styles.btn} onClick={props.clicked}>{props.children}</button>
    );
}

export default SelectableButton;