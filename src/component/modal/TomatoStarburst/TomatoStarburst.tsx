import React from 'react'
import styles from '../Modal.module.css'
import tomatoStarburst from '../../../res/images/big-tomato-star-burst.svg'
import DirectedDialog from '../../static/DirectedDialog/DirectedDialog'

interface Props {
  withDialog?: string
}

export default function TomatoStarburst(props: Props) {
  let tomatoes = <img className={styles.tomatoStarburst} src={tomatoStarburst} alt={'three tomatoes with starburst'} />
  return (
    <div className={styles.modalWrapper}> {/*default closed*/}
      <div className={styles.modalOverlay}>
        {props.withDialog
          ? (
            <DirectedDialog
              side={'left'}
              closenessCoordinates={{x: 300, y: 275}}
              anchor={tomatoes}
            >
              {props.withDialog}
            </DirectedDialog>
          )
          : tomatoes
        }
      </div>
    </div>
  )
}