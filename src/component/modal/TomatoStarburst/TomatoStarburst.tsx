import React from 'react'
import styles from '../Modal.module.css'
import tomatoStarburst from '../../../res/images/big-tomato-star-burst.svg'

export default function TomatoStarburst() {
  return (
    <div className={styles.modalWrapper}> {/*default closed*/}
      <div className={styles.modalOverlay}>
          <img className={styles.tomatoStarburst} src={tomatoStarburst} alt={'three tomatoes with starburst'} />
      </div>
    </div>
      )
    }