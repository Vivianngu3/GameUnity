import React from 'react'
import styles from './CheckListItem.module.css'
import CheckMark from '../../../../../src/res/images/green-check.svg'
import utils from "../../../../utils/utils.module.css";

interface Props {
    item?: string
    checked?: boolean
}

export default function CheckListItem(props: Props) {

    let checkBox = <div className={styles.checkBox}></div>

    if (props.checked) {
        checkBox =
        <div className={styles.checkBox}>
            <img className={styles.checkMark} src={CheckMark} alt={'check mark'} width={'30'} height={'30'} />
        </div>
    }

    return(
        <div className={styles.itemContainer}>
            <div className={styles.checkBoxContainer}>
                {checkBox}
            </div>

            <div className={styles.itemText}>
                {props.item}
            </div>
        </div>
    )
}