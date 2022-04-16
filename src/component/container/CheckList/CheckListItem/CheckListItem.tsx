import React from 'react'
import styles from './CheckListItem.module.css'
import CheckMark from '../../../../../src/res/images/green-check.svg'

interface Props {
  item?: string
  checked?: boolean
}

export default function CheckListItem(props: Props) {
  return(
    <div className={styles.itemContainer}>
      <div className={styles.checkBoxContainer}>
        <div className={styles.checkBox}>
          {props.checked &&
            <img className={styles.checkMark} src={CheckMark} alt={'check mark'} width={'30'} height={'30'} />
          }
        </div>
      </div>

      <div className={styles.itemText}>
        {props.item}
      </div>
    </div>
  )
}