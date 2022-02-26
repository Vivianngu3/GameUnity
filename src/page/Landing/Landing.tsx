import React from 'react'
import styles from './Landing.module.css'
import utils from '../../utils/utils.module.css'

import plants from '../../res/images/four-plants.png'
import backgroundCurve from '../../res/images/landing-background-curve.svg'

import farmers from '../../res/images/farmers.png'
import tomato from '../../res/images/tomato.png'
import carrots from '../../res/images/carrots.png'
import ribbon from '../../res/images/award-ribbon.png'

import Heading from '../../component/text/Heading'
import Block from '../../component/text/Block'
import NavButton from '../../component/clickable/NavButton/NavButton'
import {ABOUT_US, GAME} from '../../res/constants/url-endpoints'
import ImageWithText from '../../component/static/ImageWithText/ImageWithText'

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
            shade={'color-secondary'}
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
      <img
        src={backgroundCurve}
        alt={"Decorative curve"}
        aria-hidden={true}
        className={styles['background-curve']}
      />
      <section className={styles.journey}>
        <Heading type={'section'} allCaps={true}>
          Start your Journey
        </Heading>
        <table className={utils['block-horiz-centered']}>
          <tr>
            <td>
              <ImageWithText src={farmers} alt={'Farmers'}>
                Become a gardner.
              </ImageWithText>
            </td>
            <td>
              <ImageWithText src={tomato} alt={'Tomato growing'}>
                Pick what seed to grow.
              </ImageWithText>
            </td>
          </tr>
          <tr>
            <td>
              <ImageWithText src={carrots} alt={'Carrots in a planter'}>
                Learn gardening facts.
              </ImageWithText>
            </td>
            <td>
              <ImageWithText src={ribbon} alt={'Award ribbon'}>
                Gain new vocabulary.
              </ImageWithText>
            </td>
          </tr>
        </table>
      </section>
      <section className={styles.message}>
        <Heading type={'section'}>
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
          shade={'color-secondary'}
          destination={ABOUT_US}
          centered={true}
        >
          About Us!
        </NavButton>
      </section>
    </div>
  )
}