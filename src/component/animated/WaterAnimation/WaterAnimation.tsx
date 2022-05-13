import React from 'react'
import styles from "./WaterAnimation.module.css";
import wateringCan from "../../../res/images/watering-can.svg";
import water from  "../../../res/images/water-drops.svg"

export default function WaterAnimation() {
  return (
    <>
      <img className={styles.animateWateringCan} src={wateringCan} alt={'Watering can'} />
      <img className={styles.waterDrops} src={water} alt={'Water drops'} />
    </>
  )
}