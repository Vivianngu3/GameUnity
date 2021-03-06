import React from 'react'
import styles from './Recap.module.css'
import Block from '../../component/text/Block'
import Heading from '../../component/text/Heading'
import Caption from '../../component/text/Caption'


import Bee from '../../res/images/Bee.svg'
import Footer from '../../component/peripheral/Footer/Footer'
import NavBar from '../../component/peripheral/NavBar/NavBar'


export default function Recap () {

  return (
    <>
      <NavBar color={'page-background'} page={'Recap'} />
      <div className={styles.page}>

        <section className={styles['heading']}>

          <div className={styles['beeHeading']}>
            <img className={styles['bee1']} src={Bee} alt={"Smiling cartoon bee"}/>
            <Heading block= {true} type={'section'}> RECAP ON SPROUT </Heading>
            <img className={styles['bee2']} src={Bee} alt={"Smiling cartoon bee"}
            />
          </div>

        </section>

        <section className={styles['boxContent']}>

          <Block align={'center'}> We have provided sample questions that can be used after the game has been played.
            This will ensure that the contents in the game have met its purpose of teaching vocabulary, decision making,
            and impacts that were made in the virtual environment.
          </Block>

        </section>

        <Heading type={'section'}> HOVER OVER AREAS TO COVER </Heading>


        <div className= {styles['row']}>

          <div className={styles['flip-box']}>
            <div className={styles['flip-box-inner']}>

              <div className={styles['flip-box-front']}>
                <h2>Vocabulary</h2>
                <h3>Words to revisit from the game</h3>
              </div>

              <div className={styles['flip-box-back']}>
                <h2>Questions</h2>
                <ul className={styles.flipBoxList}>
                  <li className={styles.flipBoxListItem}>What is agriculture?</li>
                  <li className={styles.flipBoxListItem}>What is a pesticide?</li>
                  <li className={styles.flipBoxListItem}>What is pollinate?</li>
                  <li className={styles.flipBoxListItem}>What is chemical?</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles['flip-box']}>
            <div className={styles['flip-box-inner']}>

              <div className={styles['flip-box-front']}>
                <h2>Comprehension</h2>
                <h3>Find out the key takeaways</h3>

              </div>

              <div className={styles['flip-box-back']}>
                <h2>Questions</h2>
                <ul className={styles.flipBoxList}>
                  <li className={styles.flipBoxListItem}>What was the main idea of the story?</li>
                  <li className={styles.flipBoxListItem}>What happens when you use pesticide?</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles['flip-box']}>
            <div className={styles['flip-box-inner']}>

              <div className={styles['flip-box-front']}>
                <h2>Critical Thinking</h2>
                <h3>Understand the effects of choices</h3>
              </div>

              <div className={styles['flip-box-back']}>
                <h2>Questions</h2>
                <ul className={styles.flipBoxList}>
                  <li className={styles.flipBoxListItem}>What clues did you use to make the right choices?</li>
                  <li className={styles.flipBoxListItem}>How can you connect what you learned to your life?</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        <Heading type={'section'}> TRY THIS AT HOME </Heading>
        <Caption>Continue growing outside our site!</Caption>

        <div className={styles['container']}>
          <div className={styles['card']}>
            <div className={styles['img']}> </div>
            <div className={styles['content']}>
              <h2 className={styles['title']}>Chia Pets</h2>
              <div>
                <p> Chia Pets are figurines where the chia sprouts grow within a couple of weeks to look like the animal???s fur or hair. </p>
              </div>
              <div>
                <button className={styles.cardButton}> <a className={styles.cardLink} href='https://www.chia.com/' target="_blank" rel="noreferrer"> Find More </a> </button>
              </div>
            </div>
          </div>

          <div className={styles['card']}>
            <div className={styles['img2']}> </div>
            <div className={styles['content']}>
              <h2 className={styles['title']}>Eastern Leaf</h2>
              <div>
                <p> Our little green trees are ready for adoption and looking for good homes.</p>
              </div>
              <div>
                <button className={styles.cardButton}> <a className={styles.cardLink} href='https://www.easternleaf.com/' target="_blank" rel="noreferrer"> Find More </a> </button>
              </div>
            </div>
          </div>

          <div className={styles['card']}>
            <div className={styles['img3']}> </div>
            <div className={styles['content']}>
              <h2 className={styles['title']}>Plant Kits</h2>
              <div>
                <p> Nature???s Blossom all-in-one beginner???s seed starter kits are perfect for any age.
                  Enjoy the rewarding feeling of watching your tomato garden grow. </p>
              </div>
              <div>
                <button className={styles.cardButton}> <a className={styles.cardLink} href='https://www.amazon.com/Natures-Blossom-Tomato-Gardening-Starter/dp/B06XJWQ8FM' target="_blank" rel="noreferrer"> Find More </a> </button>
              </div>
            </div>
          </div>

        </div>

      </div>
      <Footer />
    </>
  )
}