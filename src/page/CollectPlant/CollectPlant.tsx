import React from 'react'
import GameBackground from '../../component/animated/GameBackground/GameBackground'
import Timmy from '../../component/static/Timmy/Timmy'
import TomatoStarburst from '../../component/modal/TomatoStarburst/TomatoStarburst'
import NextArrow from '../../component/clickable/NextArrow/NextArrow'
import {useNavigate} from 'react-router-dom'
import {GAME, KITCHEN} from '../../res/constants/url-endpoints'
import CheckList from '../../component/container/CheckList/CheckList'

export default function CollectPlant() {
  const [showTimmy, setShowTimmy] = React.useState(false)
  const [showDialog, setShowDialog] = React.useState(true)

  const navigate = useNavigate()

  const [nextArrowCallbacks, setNextArrowCallbacks] = React.useState<( () => void )[]>([
    () => {
      setShowTimmy(true)
      setShowDialog(false)
    },
    () => {
      navigate('/' + GAME + KITCHEN)
    },
  ])

  return (
    <>
      <GameBackground />

      <NextArrow
        callbacks={nextArrowCallbacks}
        setCallbacks={setNextArrowCallbacks}
        modalVariation
      />

      <CheckList dug planted watered protected improved learned collected modalVariation />

      {showTimmy &&
        <Timmy modalVariation={true}>Great Job! Now, let’s take your tomatoes to the kitchen and make something yummy!</Timmy>
      }

      {showDialog
        ? <TomatoStarburst withDialog={"You got tomatoes!"} />
        : <TomatoStarburst />
      }
    </>
  )
}