import React from 'react'
import styles from "./WormsAnimation.module.css";
import wormsBag from "../../../res/images/worms-bag.svg";
import worms2 from  "../../../res/images/2-worms.svg"
import worms3 from  "../../../res/images/3-worms.svg"


interface Props {

}

export default function WormsAnimation(props: Props) {
  return (
    <>
      <img className={styles.animateWormBag} src={wormsBag} />
      <img className={styles.worms2} src={worms2} />
      <img className={styles.worms3} src={worms3} />
    </>
  )
}