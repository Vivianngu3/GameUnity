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
}

export default function CheckList(props: Props) {

    return(
      <div className={styles.checkListContainer}>

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