import React from 'react'
import {TIME_LAPSE as timeLapseSeconds} from '../../theme/animation-durations'
import GameBackground from '../../component/animated/GameBackground/GameBackground'
import CheckList from '../../component/container/CheckList/CheckList'
import NextArrow from '../../component/clickable/NextArrow/NextArrow'
import {useNavigate} from 'react-router-dom'
import {GAME, NEW_SPROUT} from '../../res/constants/url-endpoints'
import PlotAnimation from '../../component/animated/PlotAnimation/PlotAnimation'

export default function TimeLapse() {
  const [showNextArrow, setShowNextArrow] = React.useState(false)

  const navigate = useNavigate()

  React.useEffect(() => {
    let timerID = setTimeout(() => {
      setShowNextArrow(true)
    }, timeLapseSeconds * 1000)
    return () => {clearTimeout(timerID)}
  })

  return (
    <>
      <GameBackground time={'time-lapse'}/>
      <PlotAnimation />
      {showNextArrow &&
        <>
          <CheckList dug planted watered />
          <NextArrow callbacks={[()=>{navigate('/' + GAME + NEW_SPROUT)}]} setCallbacks={()=>{}} />
        </>
      }
    </>
  )
}
