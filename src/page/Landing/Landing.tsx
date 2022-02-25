import React from "react"
import styles from './Landing.module.css'
import backgroundCurve from '../../res/images/landing-background-curve.svg'
import Heading from '../../component/text/Heading'

export default function Landing() {
  return (
    <div className={styles.page}>
      <section className={styles['with-background-color']}>
        <Heading type={'section'}>Landing</Heading>
      </section>
      <img
        src={backgroundCurve}
        alt={"Decorative curve"}
        aria-hidden={true}
        className={styles['background-curve']}
      />
    </div>
  )
}
/*
className={styles.backgroundCurve}
 */