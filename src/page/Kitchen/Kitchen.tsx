import React from 'react'
import KitchenBackground, {View} from '../../component/static/KitchenBackground/KitchenBackground'
import {Time} from '../../component/static/Clock/Clock'
import NextArrow from '../../component/clickable/NextArrow/NextArrow'
import Timmy from '../../component/static/Timmy/Timmy'
import {GAME, NURTURING} from "../../res/constants/url-endpoints";
import {useNavigate} from "react-router-dom";

export default function Kitchen() {
  const [view, setView] = React.useState<View>('cutting-board')
  const [time, setTime] = React.useState<Time>('1')
  const [timmyText, setTimmyText] = React.useState<string>('Welcome to the kitchen.')

  const navigate = useNavigate()

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
    () => {
      setTimmyText('Don\'t throw away everything. Ask an adult how you can "recycle".')
      setTime('4')
    },
    () => {
      setTimmyText('Eat more vegetables to stay healthy and save the Earth.')
      setTime('5')
    },
    () => {
      setTimmyText('Turn off the power for things such as lights and computers when you are not using them.')
      setTime('6')
    },
    () => {
      setTimmyText('Your meal is done cooking! Time to take it out of the oven.')
      setTime('1')
    },
    () => {
      setTimmyText('Wow, that pizza looks really good!')
      setTime('1')
      setView('pizza')
    },
    () => {
      setTimmyText('With that, out journey comes to an end.')
      setTime('1')
      setView('clear')
    },
    () => {
      setTimmyText('I\'ll see you next time!')
      setTime('1')
    },
    () => {
      navigate('/' + GAME)
    }
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