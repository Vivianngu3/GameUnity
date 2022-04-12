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
        className={styles['bee2']}
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
        
        <div className= {styles['row']}>

          <div className={styles['flip-box']}>
            <div className={styles['flip-box-inner']}>
              
              <div className={styles['flip-box-front']}>
                <h2>Vocabulary</h2>
              </div>

              <div className={styles['flip-box-back']}>
                <h2>Questions</h2>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  )
}