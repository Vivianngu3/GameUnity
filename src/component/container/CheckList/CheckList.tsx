import React from 'react'
import styles from './CheckList.module.css'
import CheckListItem from "./CheckListItem/CheckListItem";

interface Props {
    checked?: {
        dug: boolean
        planted: boolean
        watered: boolean
        protected: boolean
        improved: boolean
        learned: boolean
        collected: boolean
    }
}

export default function CheckList(props: Props) {

    return(
        <div className={styles.checkListBox}> {/*Box*/}
            <div className={styles.checkListContainer}>

                <div className={styles.checkListHeader}>
                    Checklist
                </div>

                <div className={styles.checkListItems}>
                    <CheckListItem
                        checked={true}
                        item={'Dig a hole'}
                    />
                    <CheckListItem
                        checked={false}
                        item={'Plant seed'}
                    />
                    <CheckListItem
                        checked={false}
                        item={'Water seed'}
                    />
                    <CheckListItem
                        checked={false}
                        item={'Protect plant'}
                    />
                    <CheckListItem
                        checked={false}
                        item={'Improve soil'}
                    />
                    <CheckListItem
                        checked={false}
                        item={'Learn all the tools'}
                    />
                    <CheckListItem
                        checked={false}
                        item={'Collect plant'}
                    />
                </div>

            </div>
            <div className={styles.bottomGradient}></div>
        </div>
    )
}