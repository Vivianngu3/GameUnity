import React from 'react'
import styles from "./ScissorsAnimation.module.css";
import openScissors from "../../../res/images/open-scissors.svg";
import closedScissors from "../../../res/images/closed-scissors.svg";

export default function ScissorsAnimation() {
  return (
    <>
      <img className={styles.animateOpenScissors1} src={openScissors} alt={'Scissors'} />
      <img className={styles.animateOpenScissors2} src={openScissors} alt={'Scissors'} />
      <img className={styles.animateClosedScissors1} src={closedScissors} alt={'Scissors'} />
      <img className={styles.animateClosedScissors2} src={closedScissors} alt={'Scissors'} />
    </>
  )
}