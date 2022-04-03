import React from 'react'
import Dialog from '../../component/static/Dialog/Dialog'
import Timmy from '../../component/static/Timmy/Timmy'
import NextArrow from '../../component/clickable/NextArrow/NextArrow'

export default function Welcome() {
  let timeoutID: NodeJS.Timeout

  const [showTimmy, setShowTimmy] = React.useState(false)
  const [timmy, setTimmy] = React.useState(<></>)
  const [showArrow, setShowArrow] = React.useState(false)

  const [isModalVisible, setIsModalVisible] = React.useState(false)
  const toggleModal = () => {
    setIsModalVisible(wasModalVisible => !wasModalVisible)
  }


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
      <Dialog>
        Welcome to Sprout!
        <br/>
        Our friend Timmy will help you on your journey.
      </Dialog>
      {showTimmy &&
        timmy
      }
      {showArrow &&
        <NextArrow callbackArray={nextArrowCallbacks} />
      }
    </div>
  )
}