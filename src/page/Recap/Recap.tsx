import React from 'react'
import styles from './Recap.module.css'
import Block from '../../component/text/Block'
import Heading from '../../component/text/Heading'


import Bee from '../../res/images/Bee.svg'


export default function Recap () {

  return (
    <div className={styles.page}>

      <section className={styles.center}>
      
        <section className={styles['heading']}>

        <img
        className={styles['bee1']}
        src={Bee}
        alt={"Smiling cartoon bee"}
        />

        <Heading type={'section'} > RECAP ON SPROUT </Heading>

        <img
        src={Bee}
        alt={"Smiling cartoon bee"}
        />

        </section>
        
        <section className={styles['boxContent']}>
          <Block align={'center'}> We have provided sample questions that can be used after the game has been played.
            This will ensure that the contents in the game have met its purpose of teaching vocabulary, decision making,
            and impacts that were made in the virtual environment.
          </Block>
        </section>
        
      <div className= {styles['cards']}>

      </div>
      </section>

    </div>
  )
}