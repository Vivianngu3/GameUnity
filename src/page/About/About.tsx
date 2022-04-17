import React from 'react'
import styles from './About.module.css'

import Block from '../../component/text/Block'
import Heading from '../../component/text/Heading'
import TeamMemberInfo from '../../component/static/TeamMemberInfo/TeamMemberInfo'
import Curve from '../../component/static/BackgroundCurve/BackgroundCurve'

import Vivian from '../../res/images/Vivian.png'
import Juliane from '../../res/images/Juliane.png'
import Shane from '../../res/images/Shane.png'
import Hannan from '../../res/images/Hannan.png'
import Bee from '../../res/images/Bee.svg'

export default function About() {
  return (
    <div className={styles.page}>

      <section className={styles['with-background-color']}>
        <div className={styles.beesHeading}>
          <img src={Bee} alt={'Bee'} className={styles.beeReflect} />
          <Heading block={true} type={'section'}> OUR TEAM MEMBERS</Heading>
          <img src={Bee} alt={'Bee'} className={styles.bee} />
        </div>
        <Block align={'center'}>
          Undergraduates at the University of Washington who loves to play video games.
        </Block>
      </section>

      <section className={styles.imageSection}>
        <TeamMemberInfo
          memberImageSrc={Vivian}
          memberImageAlt={"Lead Designer"}
          memberName={"Vivian Nguyen"}
          memberRole={"UX/UW Designer"}
          emailSrc={"vn23@uw.edu"}
          githubSrc={"www.github.com/Vivianngu3"}
          linkedinSrc={'www.linkedin.com/in/vivianngu/'}
        />
        <TeamMemberInfo
          memberImageSrc={Juliane}
          memberImageAlt={'Project Manager'}
          memberName={'Juliane De Los Santos'}
          memberRole={'Project Manager'}
          emailSrc= {'julianed@uw.edu'}
          githubSrc={'www.github.com/julianedelossantos'}
          linkedinSrc={'www.linkedin.com/in/juliane-de-los-santos/'}
        />
        <TeamMemberInfo
          memberImageSrc={Shane}
          memberImageAlt={"Developer"}
          memberName={"Shane Fretwell"}
          memberRole={"Developer"}
          emailSrc={'fretws@uw.edu'}
          githubSrc={"www.github.com/fretws"}
          linkedinSrc={'www.linkedin.com/in/shane-fretwell-a50659214/'}
        />
        <TeamMemberInfo
          memberImageSrc={Hannan}
          memberImageAlt={"Developer"}
          memberName={"Hannan Ajmal"}
          memberRole={"Developer"}
          emailSrc={'hannanajmal05@gmail.com'}
          githubSrc={'www.github.com/hannanajmal/'}
          linkedinSrc={'www.linkedin.com/in/hannan-ajmal/'}
        />
      </section>

      <Curve color='four' />

      <section className={styles.container}>

        <section className={styles.content}>
          <Heading type={'section'}> THE PROBLEM AREA</Heading>
          <Block align={'center'}>
            The ongoing COVID-19 pandemic has shifted public, in-person elementary school classrooms to an online format, thus rendering traditional-based classroom work useless. This is especially concerning around the already unrequired science curriculum in the U.S. The increasing disengagement yet increasing comfortability of low-quality online teaching lowers students’ overall academic capability compared to previous generations. These contexts pose a risk when it comes to how equipped the future generations will be when understanding and handling the fast approaching catastrophic effects from past poor environmental decisions.
          </Block>
        </section>

        <section className={styles.content}>
          <Heading type={'section'}> OUR MISSION</Heading>
          <Block align={'center'}>
            The Sprout team aims to provide a solution to encourage elementary school teachers for grades 1-3 to incorporate environmental education in their classrooms. Teachers will find that our gamified approach to increasing environmental awareness, more namely agricultural awareness, references <a href={'http://www.corestandards.org/ELA-Literacy/'}>english language arts (ELA) common core standards</a> and <a href={'https://ngss.nsta.org/AccessStandardsByTopic.aspx'}>next generation science standards</a> for elementary school students grades 1-3. This interactive approach to storytelling will ultimately fulfill our mission to increase environmental awareness in elementary school classrooms while furthering the development of students’ reading capabilities.
          </Block>
        </section>

      </section>

    </div>
  )
}