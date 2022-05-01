import React from 'react'
import styles from './CheckList.module.css'
import CheckListItem from "./CheckListItem/CheckListItem";

export interface Props {
    dug?: boolean
    planted?: boolean
    watered?: boolean
    protected?: boolean
    improved?: boolean
    learned?: boolean
    collected?: boolean
    modalVariation?: boolean
}

export default function CheckList(props: Props) {
    const containerStyles = []

    if (props.modalVariation) {
        containerStyles.push(styles.checkListContainerPriority)
    } else {
        containerStyles.push(styles.checkListContainer)
    }
    return (
      <div className={containerStyles.join(' ')}>

          <div className={styles.checkListHeader}>
              To-Do
          </div>

          <div className={styles.checkListItems}>
              <CheckListItem
                checked={props.dug}
                item={'1. Dig a hole'}
              />
              <CheckListItem
                checked={props.planted}
                item={'2. Plant seed'}
              />
              <CheckListItem
                checked={props.watered}
                item={'3. Water seed'}
              />
              <CheckListItem
                checked={props.protected}
                item={'4. Protect plant'}
              />
              <CheckListItem
                checked={props.improved}
                item={'5. Improve soil'}
              />
              <CheckListItem
                checked={props.learned}
                item={'6. Learn all the tools'}
              />
              <CheckListItem
                checked={props.collected}
                item={'7. Collect plant'}
              />
          </div>
      </div>
    )
}