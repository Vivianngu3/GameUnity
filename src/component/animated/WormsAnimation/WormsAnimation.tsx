import React from 'react'
import styles from "./WormsAnimation.module.css";
import wormsBag from "../../../res/images/worms-bag.svg";
import worms2 from  "../../../res/images/2-worms.svg"
import worms3 from  "../../../res/images/3-worms.svg"

export default function WormsAnimation() {
  return (
    <>
      <img className={styles.animateWormBag} src={wormsBag} alt={'Bag of worms'} />
      <img className={styles.worms2} src={worms2} alt={'Worms'} />
      <img className={styles.worms3} src={worms3} alt={'Worms'} />
    </>
  )
}