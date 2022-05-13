import React from 'react'
import {TIME_LAPSE as timeLapseSeconds} from '../../theme/animation-durations'
import GameBackground from '../../component/animated/GameBackground/GameBackground'
import CheckList from '../../component/container/CheckList/CheckList'
import NextArrow from '../../component/clickable/NextArrow/NextArrow'
import {useNavigate} from 'react-router-dom'
import {GAME, NEW_SPROUT} from '../../res/constants/url-endpoints'
import PlotAnimation from '../../component/animated/PlotAnimation/PlotAnimation'
import DirectedDialog from '../../component/static/DirectedDialog/DirectedDialog'

export default function TimeLapse() {
  const [timeLapseComplete, setTimeLapseComplete] = React.useState(false)

  const navigate = useNavigate()

  React.useEffect(() => {
    let timerID = setTimeout(() => {
      setTimeLapseComplete(true)
    }, timeLapseSeconds * 1000)
    return () => {clearTimeout(timerID)}
  })

  return (
    <>
      <GameBackground time={'time-lapse'}/>
      {timeLapseComplete ? (
        <>
          <DirectedDialog
            anchor={ <PlotAnimation complete /> }
            side={'left'}
            closenessCoordinates={{x: 35, y: -75}}
            >Look at your seed sprout!</DirectedDialog>
          <CheckList dug planted watered />
          <NextArrow callbacks={[()=>{navigate('/' + GAME + NEW_SPROUT)}]} setCallbacks={()=>{}} />
        </>
        ) : <PlotAnimation />
      }
    </>
  )
}
