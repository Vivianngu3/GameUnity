import React from 'react'
import styles from './Landing.module.css'
import utils from '../../utils/utils.module.css'

import plants from '../../res/images/four-plants.png'

import gardener from '../../res/images/single-gardener.png'
import packets from '../../res/images/packets.png'
import checklist from '../../res/images/checklist.png'
import medal from '../../res/images/medal.svg'

import Heading from '../../component/text/Heading'
import Block from '../../component/text/Block'
import NavButton from '../../component/clickable/NavButton/NavButton'
import {ABOUT_US, GAME} from '../../res/constants/url-endpoints'
import ImageWithText from '../../component/static/ImageWithText/ImageWithText'
import Curve from '../../component/static/BackgroundCurve/BackgroundCurve'

export default function Landing() {
  return (
    <div className={styles.page}>
      <section className={styles['with-background-color']}>
        <section className={styles.left}>
          <Heading type={'section'}>Grow With Us!</Heading>
          <Block align={'left'}>
            Come help the Sprout team in learning about agricultural problems simply by starting in your backyard!
          </Block>
          <br/>
          <NavButton
            destination={GAME}
            centered={true}
          >
            Play Now!
          </NavButton>
        </section>
        <section className={styles.right}>
          <img
            className={styles.plants}
            src={plants}
            alt={"Happy illustrated plants"}
          />
        </section>
      </section>
      <Curve color='page-background' />
      {/* <img
        src={backgroundCurve}
        alt={"Decorative curve"}
        aria-hidden={true}
        className={styles['background-curve']}
      /> */}
      <section className={styles.journey}>
        <Heading type={'section'} allCaps={true}>
          Start your Journey
        </Heading>
        <table className={utils['block-horiz-centered']}>
          <tr>
            <td>
              <div>
                <ImageWithText src={gardener} alt={'Farmers'}>
                  Become a gardner.
                </ImageWithText>
              </div>
            </td>
            <td>
              <div>
                <ImageWithText src={packets} alt={'Tomato growing'}>
                  Pick what seed to grow.
                </ImageWithText>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <ImageWithText src={checklist} alt={'Carrots in a planter'}>
                  Learn gardening facts.
                </ImageWithText>
              </div>
            </td>
            <td>
              <div>
                <ImageWithText src={medal} alt={'Award medal'}>
                  Gain new vocabulary.
                </ImageWithText>
              </div>
            </td>
          </tr>
        </table>
      </section>
      <section className={styles.message}>
        <Heading type={'section'} allCaps={true}>
          Our Message to You
        </Heading>
        <Block>
          The Sprout team wants to extend our highest thanks to teachers who incorporate our interactive website in their classrooms to keep students engaged in their reading development and environmental education.
        </Block>
        <br/>
        <Block>
          New to Sprout? Click below to learn more about the team and our mission.
        </Block>
        <br/>
        <NavButton
          destination={ABOUT_US}
          centered={true}
        >
          About Us!
        </NavButton>
      </section>
    </div>
  )
}