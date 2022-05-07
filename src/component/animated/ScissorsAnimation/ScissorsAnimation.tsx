import React from 'react'
import styles from "./ScissorsAnimation.module.css";
import openScissors from "../../../res/images/open-scissors.svg";
import closedScissors from "../../../res/images/closed-scissors.svg";

interface Props {

}

export default function ScissorsAnimation(props: Props) {
  return (
    <>
      <img className={styles.animateOpenScissors1} src={openScissors} />
      <img className={styles.animateOpenScissors2} src={openScissors} />
      <img className={styles.animateClosedScissors1} src={closedScissors} />
      <img className={styles.animateClosedScissors2} src={closedScissors} />
    </>
  )
}