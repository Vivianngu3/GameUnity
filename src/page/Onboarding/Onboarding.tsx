import React from 'react'
import Dialog from '../../component/static/Dialog/Dialog'
import Timmy from '../../component/static/Timmy/Timmy'
import NextArrow from '../../component/clickable/NextArrow/NextArrow'
import {GAME, NURTURING} from '../../res/constants/url-endpoints'
import {useNavigate} from 'react-router-dom'

export default function Onboarding() {

  const [showDialog, setShowDialog] = React.useState(true)
  const [dialog, setDialog] = React.useState(
    <Dialog>
      Now it's time to grow your seed!
    </Dialog>
  )
  const [showTimmy, setShowTimmy] = React.useState(false)
  const [timmy, setTimmy] = React.useState(<></>)
  const [showArrow, setShowArrow] = React.useState(true)

  const navigate = useNavigate()

  let initialNextArrowCallbacks = [
    () => {
      setShowTimmy(false)
      setShowArrow(true)
      setShowDialog(true)
      setDialog(
        <Dialog>
          But first, we will show you the new tools you have!
        </Dialog>
      )
    },
    () => {
      setShowTimmy(true)
      setShowDialog(false)
      setTimmy(<Timmy>This bar on the bottom is your tool box!</Timmy>)
      setShowArrow(true)
    },
    () => {
      setShowTimmy(true)
      setTimmy(<Timmy>Click on it and look inside!</Timmy>)
      setShowArrow(true)
    },
    /* ADD TOOL BOX TUTORIAL HERE */
    () => {
      setShowTimmy(true)
      setTimmy(<Timmy>Good job! That's all you need to know to play.</Timmy>)
      setShowArrow(true)
    },
    () => {
      setShowTimmy(true)
      setTimmy(<Timmy>Now I will let you begin your journey!</Timmy>)
      setShowArrow(true)
    },
    () => {
      setShowTimmy(true)
      setTimmy(<Timmy>Finish the tasks in the "to-do" list!</Timmy>)
      setShowArrow(true)
    },
    () => {
      navigate('/' + GAME + NURTURING)
    }
  ]
  const [nextArrowCallbacks, setNextArrowCallbacks] = React.useState(initialNextArrowCallbacks)

  return (
    <div>
      {showDialog &&
        dialog
      }
      {showTimmy &&
        timmy
      }
      {showArrow &&
        <NextArrow
          callbacks={nextArrowCallbacks}
          setCallbacks={setNextArrowCallbacks}
        />
      }
    </div>
  )
}