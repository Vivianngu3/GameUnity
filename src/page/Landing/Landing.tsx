import React from 'react'
import styles from './Landing.module.css'

import splashArt from '../../res/images/landing-splash.svg'

import Timmy1 from '../../res/images/Timmy1.svg'
import Timmy2 from '../../res/images/Timmy2.svg'
import Timmy3 from '../../res/images/Timmy3.svg'
import Timmy4 from '../../res/images/Timmy4.svg'
import checklist from '../../res/images/checklist.png'
import medal from '../../res/images/medal.svg'

import Heading from '../../component/text/Heading'
import Block from '../../component/text/Block'
import NavButton from '../../component/clickable/NavButton/NavButton'
import {ABOUT_US, GAME} from '../../res/constants/url-endpoints'
import ImageWithText from '../../component/static/ImageWithText/ImageWithText'
import Curve from '../../component/static/BackgroundCurve/BackgroundCurve'
import NavBar from '../../component/peripheral/NavBar/NavBar'
import Footer from '../../component/peripheral/Footer/Footer'
import DirectedDialog from '../../component/static/DirectedDialog/DirectedDialog'
import Plot from '../../component/container/Plot/Plot'

export default function Landing() {
  return (
    <>
      <NavBar color={'page-background'} page={'Home'} />
      <div className={styles.page}>
        <section className={styles['with-background-color']}>
          <section className={styles.left}>
            <Heading type={'section'}>Grow With Us!</Heading>
            <Block align={'left'}>
              Come help the Sprout team in learning about agricultural problems simply by starting in your backyard!
            </Block>
            <br/>
            <NavButton
              destination={'/' + GAME}
              centered={true}
            >
              Play Now!
            </NavButton>
          </section>
          <section className={styles.right}>
            <img
              className={styles.splashArt}
              src={splashArt}
              alt={"Happy illustrated plants"}
            />
          </section>
        </section>
        <Curve color='page-background' />
        <section className={styles.journey}>
          <Heading type={'section'} allCaps={true}>
            Journey Through Sprout
          </Heading>

          <div className={styles.rowContainer}>
            <img src={Timmy1} alt={'Timmy1'} height={'200'} width={'200'}/>
            <img src={Timmy2} alt={'Timmy2'} height={'200'} width={'200'}/>
            <img src={Timmy3} alt={"Timmy3"} height={'200'} width={'200'}/>
            <img src={Timmy4} alt={"Timmy4"} height={'200'} width={'200'}/>
          </div>
          <Block>Choose your gardening guides.</Block>

          <div className={styles.rowContainer}>
            <div>
              <ImageWithText src={checklist} alt={'Carrots in a planter'}>
                Learn gardening facts.
              </ImageWithText>
            </div>

            <div>
              <ImageWithText src={medal} alt={'Award medal'}>
                Gain new vocabulary.
              </ImageWithText>
            </div>
          </div>

        </section>

        <section>
          <div>
            <iframe
              className={styles.videoMargin}
              width="800"
              height="500"
              src="https://www.youtube.com/embed/ylQT1THszKE"
              title="Sprout Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
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
            destination={'/' + ABOUT_US}
            centered={true}
          >
            About Us!
          </NavButton>
        </section>
      </div>
      <Footer />
    </>
  )
}