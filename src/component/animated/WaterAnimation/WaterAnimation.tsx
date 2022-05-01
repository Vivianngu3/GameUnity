import React from 'react'
import styles from "./WaterAnimation.module.css";
import wateringCan from "../../../res/images/watering-can.svg";
import water from  "../../../res/images/water-drops.svg"

interface Props {

}

export default function WaterAnimation(props: Props) {
  return (
    <>
      <img className={styles.animateWateringCan} src={wateringCan} />
      <img className={styles.waterDrops} src={water} />
    </>
  )
}