import React from 'react'
import Dialog from '../../component/static/Dialog/Dialog'
import Timmy from '../../component/static/Timmy/Timmy'
import NextArrow from '../../component/clickable/NextArrow/NextArrow'
import utils from '../../utils/utils.module.css'
import Definition from '../../component/modal/Definition/Definition'

export default function Welcome() {
  let timeoutID: NodeJS.Timeout

  const [dialog, setDialog] = React.useState(
    <Dialog>
      Welcome to Sprout!
      <br/>
      Our friend Timmy will help you on your journey.
    </Dialog>
  )
  const [showTimmy, setShowTimmy] = React.useState(false)
  const [timmy, setTimmy] = React.useState(<></>)
  const [showArrow, setShowArrow] = React.useState(false)
  const [showDefinition, setShowDefinition] = React.useState(false)

  React.useEffect(() => {
    timeoutID = setTimeout(() => {
      setTimmy(<Timmy>Click on the next button to continue</Timmy>)
      setShowTimmy(true)
      setShowArrow(true)
    }, 2500)
    return () => {clearTimeout(timeoutID)}
  }, [])

  let nextArrowCallbacks = [
    () => {
      console.log('first callback')
      setShowTimmy(false)
      setDialog(
        <Dialog>
          On this journey you will learn about <span className={utils.underline}>agriculture</span>.
        </Dialog>
      )
    },
    () => {
      console.log('second callback')
      setTimmy(<Timmy>Click on the <span>underlined</span> word to learn more about it!</Timmy>)
      setShowTimmy(true)
      setShowArrow(false)
    },

  ]

  return (
    <div>
      {showDefinition &&
        <Definition
          hide={() => {setShowDefinition(false)}}
          pronunciation={'ag-ruh-cull-chur'}
        />
      }
      {
        dialog
      }
      {showTimmy &&
        timmy
      }
      {showArrow &&
        <NextArrow callbackArray={nextArrowCallbacks} />
      }
    </div>
  )
}