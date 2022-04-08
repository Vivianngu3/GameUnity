import React from 'react'
import styles from './CheckListItem.module.css'
import utils from "../../../../utils/utils.module.css";

interface Props {
    item?: string
    checked?: boolean
}

export default function CheckListItem(props: Props) {

    let checkBox = '[ ]'

    if (props.checked) {
        checkBox = '[x]'
    }

    return(
        <div className={styles.itemContainer}>
            <div className={styles.checkBox}>
                {checkBox}
            </div>

            <div className={styles.itemText}>
                {props.item}
            </div>
        </div>
    )
}