import React, {PropsWithChildren} from 'react'
import styles from './Landing.module.css'

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
        <section className={styles.aside}>
          <Heading type={'section'}>Grow With Us!</Heading>
          <Block align={'left'}>
            Come help the Sprout team in learning about agricultural problems simply by starting in your backyard!
          </Block>
          <NavButton shade={'color-secondary'} destination={GAME}>Play Now!</NavButton>
        </section>
        <img
          src={plants}
          alt={"Happy illustrated plants"}
        />
      </section>
      <img
        src={backgroundCurve}
        alt={"Decorative curve"}
        aria-hidden={true}
        className={styles['background-curve']}
      />
      <Heading type={'section'} allCaps={true}>
        Start your Journey
      </Heading>
      <section>
        <ImageWithText src={farmers} alt={'Farmers'}>
          Become a gardner.
        </ImageWithText>
        <ImageWithText src={tomato} alt={'Tomato growing'}>
          Pick what seed to grow.
        </ImageWithText>
        <ImageWithText src={carrots} alt={'Carrots in a planter'}>
          Learn gardening facts.
        </ImageWithText>
        <ImageWithText src={ribbon} alt={'Award ribbon'}>
          Gain new vocabulary.
        </ImageWithText>
      </section>
      <section>
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
        <NavButton shade={'color-secondary'} destination={ABOUT_US}>
          About Us!
        </NavButton>
      </section>
    </div>
  )
}