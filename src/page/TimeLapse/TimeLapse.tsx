import React, {useState} from 'react'
import GameBackground, {Time} from '../../component/animated/GameBackground/GameBackground'

export default function TimeLapse() {
  const [times, setTimes] = useState<Time[]>(['noon', 'afternoon', 'evening', 'twilight'])

  React.useEffect(() => {
    let timerID = setTimeout(() => {
      let remainingTimes = times.slice(1)
      if (remainingTimes.length > 0) {
        setTimes(remainingTimes)
      } else {
        clearTimeout(timerID)
      }
    }, 1500)
    return () => { clearTimeout(timerID) }
  })

  return (
    <GameBackground time={times[0]} />
  )
}
