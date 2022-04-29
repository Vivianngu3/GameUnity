import React from 'react'
import BigLogo from '../../component/static/BigLogo/BigLogo'
import {LANDING, TIMMY_SELECT} from '../../res/constants/url-endpoints'
import Link from '../../component/clickable/Link/Link'
import styles from './GameStart.module.css'
import tree from '../../res/images/start-tree.svg'
import bush from '../../res/images/start-bush.svg'

export default function GameStart() {
  return (
    <div className={styles['full-page']}>
      <div className={styles.content}>
        <BigLogo className={styles.logo} />
        <h1 className={styles.title}>SPROUT</h1>
        <Link
          destination={TIMMY_SELECT}
          className={styles.link}
        >Start</Link>
        <Link
          destination={'/' + LANDING}
          className={styles.link}
        >Exit</Link>
        <img className={styles.treeLeft} src={tree} alt={'tree'}/>
        <img className={styles.treeRight} src={tree} alt={'tree'}/>
        <img className={styles.bushLeft} src={bush} alt={'bushes'}/>
        <img className={styles.bushRight} src={bush} alt={'bushes'}/>
      </div>
    </div>
  )
}