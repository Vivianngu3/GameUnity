import React from "react"
import Heading from "../text/Heading"
import logo from "../../res/images/seedling.svg"
import styles from "./Logo.module.css"

interface Props {
  includesTeamName?: boolean
}
export default function Logo(props: Props) {

  if(props.includesTeamName) {
    return (
      <div className={styles.rowContainer}>

        <div>
          <img src={logo} alt='logo' className={styles.icon}/>
        </div>

        <div className={styles.columnContainer}>
          <p className={styles.sproutText}>
            SPROUT
          </p>
          <p className={styles.teamText}>
            GameUnity
          </p>
        </div>

      </div>
    )
  } else {
    return (
      <div className={styles.rowContainer}>
        <img src={logo} alt='logo' className={styles.icon}/>
        <Heading
          type='title'
          color={'on-primary'}
          allCaps={true}
        >
          Sprout
        </Heading>
      </div>
    )
  }
}