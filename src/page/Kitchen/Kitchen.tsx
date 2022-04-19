import React from 'react'
import KitchenBackground, {View} from '../../component/static/KitchenBackground/KitchenBackground'
import {Time} from '../../component/static/Clock/Clock'
import NextArrow from '../../component/clickable/NextArrow/NextArrow'
import Timmy from '../../component/static/Timmy/Timmy'

export default function Kitchen() {
  const [view, setView] = React.useState<View>('cutting-board')
  const [time, setTime] = React.useState<Time>('1')
  const [timmyText, setTimmyText] = React.useState<string>('Welcome to the kitchen.')

  const initialNextArrowCallbacks: ( () => void )[] = [
    () => {
      setTimmyText('We’re going to make pizza with your tomato!')
    },
    () => {
      setTimmyText('The tomato will be used to make the pizza sauce. Let’s bring it to the oven.')
    },
    () => {
      setTimmyText('')
      setTime('2')
      setView('zoomed-out')
    },
    () => {
      setTimmyText('While your meal is getting ready, let’s take this time to learn more about the environment.')
      setTime('3')
    },
  ]

  const [nextArrowCallbacks, setNextArrowCallbacks] = React.useState(initialNextArrowCallbacks)

  return (
    <>
      <KitchenBackground view={view} time={time} />
      <NextArrow callbacks={nextArrowCallbacks} setCallbacks={setNextArrowCallbacks} />
      {timmyText &&
        <Timmy>{timmyText}</Timmy>
      }
    </>
  )
}