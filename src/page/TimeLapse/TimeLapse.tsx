import React, {useState} from 'react'
import GameBackground, {Time as TimeOfDay} from '../../component/animated/GameBackground/GameBackground'
import Plot, {Progress as PlotProgress} from '../../component/container/Plot/Plot'
import CheckList from '../../component/container/CheckList/CheckList'
import Timmy from '../../component/static/Timmy/Timmy'
import NextArrow from '../../component/clickable/NextArrow/NextArrow'
import {useNavigate} from 'react-router-dom'
import {GAME, NEW_SPROUT, TIME_LAPSE} from '../../res/constants/url-endpoints'

interface Time {
  background: TimeOfDay
  plot: PlotProgress
}

export default function TimeLapse() {
  const [timeIndex, setTimeIndex] = useState(0)
  const times: Time[] = [
    {background: 'noon', plot: 'watered'},
    {background: 'afternoon', plot: 'growth1'},
    {background: 'evening', plot: 'growth2'},
    {background: 'twilight', plot: 'grown'},
    {background: 'noon', plot: 'with-starburst'},
  ]

  const navigate = useNavigate()

  React.useEffect(() => {
    let timerID = setTimeout(() => {
      if (timeIndex < times.length - 1) {
        setTimeIndex(timeIndex + 1)
      } else {
        clearTimeout(timerID)
      }
    }, 2000)
    return () => { clearTimeout(timerID) }
  })

  return (
    <>
      <GameBackground time={times[timeIndex].background} />
      <Plot progress={times[timeIndex].plot} />
      {(timeIndex === times.length - 1) &&
        <>
          <CheckList dug planted watered />
          <Timmy>Look at your seed sprout!</Timmy>
          <NextArrow callbacks={[()=>{navigate('/' + GAME + NEW_SPROUT)}]} setCallbacks={()=>{}} />
        </>
      }
    </>
  )
}
