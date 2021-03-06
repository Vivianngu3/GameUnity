import React from 'react'
import styles from './CheckListItem.module.css'

interface Props {
  item?: string
  checked?: boolean
}

export default function CheckListItem(props: Props) {
  let classes: string[] = [styles.itemText]

  if (props.checked) {
    classes.push(styles.itemTextStrikethrough)
  }

  return(
    <div className={styles.itemContainer}>
      <div className={classes.join(' ')}>
        {props.item}
      </div>
    </div>
  )
}