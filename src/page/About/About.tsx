import React from 'react'
import styles from './About.module.css'
import Block from '../../component/text/Block'
import Heading from '../../component/text/Heading'
import Curve from '../../component/static/BackgroundCurve/BackgroundCurve'

export default function About() {
  return (
    <div className={styles.page}>
      <section className={styles['with-background-color']}>
        <Heading type={'section'}> OUR TEAM MEMBERS</Heading>
        <Block align={'center'}>
          Undergraduates at the University of Washington who loves to play video games.
        </Block>
        {/* team member pics, absolute positioned with a negative `bottom` css property */}
      </section>
      <Curve color='secondary' />
      <section>
        <section className={styles.spaced}>
          <Heading type={'section'}> THE PROBLEM AREA</Heading>
          <Block align={'center'}>
            The ongoing COVID-19 pandemic has shifted public, in-person elementary school classrooms to an online format, thus rendering traditional-based classroom work useless. This is especially concerning around the already unrequired science curriculum in the U.S. The increasing disengagement yet increasing comfortability of low-quality online teaching lowers students’ overall academic capability compared to previous generations. These contexts pose a risk when it comes to how equipped the future generations will be when understanding and handling the fast approaching catostrophic effects from past poor environmental decisions.
          </Block>
        </section>
        <section className={styles.spaced}>
          <Heading type={'section'}> OUR MISSION</Heading>
          <Block align={'center'}>
            The Sprout team aims to provide a solution to encourage elementary school teachers for grades 1-3 to incorporate environmental education in their classrooms. Teachers will find that our gamified approach to increasing environmental awareness, more namely agricultural awareness, references english language arts (ELA) common core standards and next generation science standards for elementary school students grades 1-3. This interactive approach to storytelling will ultimately fulfill our mission to increase environmental awareness in elementary school classrooms while furthuring the development of students’ reading capabilities.
          </Block>
        </section>
      </section>
    </div>
  )
}