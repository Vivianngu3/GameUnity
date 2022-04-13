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
              Checklist
          </div>

          <div className={styles.checkListItems}>
              <CheckListItem
                checked={props.dug}
                item={'Dig a hole'}
              />
              <CheckListItem
                checked={props.planted}
                item={'Plant seed'}
              />
              <CheckListItem
                checked={props.watered}
                item={'Water seed'}
              />
              <CheckListItem
                checked={props.protected}
                item={'Protect plant'}
              />
              <CheckListItem
                checked={props.improved}
                item={'Improve soil'}
              />
              <CheckListItem
                checked={props.learned}
                item={'Learn all the tools'}
              />
              <CheckListItem
                checked={props.collected}
                item={'Collect plant'}
              />
          </div>
      </div>
    )
}