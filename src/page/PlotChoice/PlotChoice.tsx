import React from 'react'
import styles from './PlotChoice.module.css'
import GameBackground from '../../component/animated/GameBackground/GameBackground'
import Dialog from '../../component/static/Dialog/Dialog'
import ChoicePlot, {Wetness as PlotWetness} from '../../component/container/Plot/ChoicePlot/ChoicePlot'
import {useNavigate} from 'react-router-dom'
import NextArrow from '../../component/clickable/NextArrow/NextArrow'
import {GAME, ONBOARDING} from '../../res/constants/url-endpoints'

export default function PlotChoice() {

  const initialDialog = <Dialog>Find the best spot for your seed to grow.</Dialog>
  const [dialog, setDialog] = React.useState(initialDialog)

  const [nextArrowCallbacks, setNextArrowCallbacks] = React.useState<(() => void)[]>([])

  const allPlots: PlotWetness[] = ['dry', 'medium', 'wet']
  const [enableCallbacks, setEnableCallbacks] = React.useState(true)
  const [plotsShown, setPlotsShown] = React.useState<PlotWetness[]>(allPlots)

  const navigate = useNavigate()

  let correctNextArrowCallbacks = [
    () => {
      navigate('/' + GAME + ONBOARDING)
    }
  ]

  let incorrectNextArrowCallbacks = [
    () => {
      setDialog(initialDialog)
      setEnableCallbacks(true)
      setPlotsShown(allPlots)
    }
  ]

  let dryCallback = () => {
    setDialog(
      <Dialog>
        This spot has very dry and hard soil. It is not the best spot.
      </Dialog>
    )
    setEnableCallbacks(false)
    setPlotsShown(['dry'])

    setNextArrowCallbacks(incorrectNextArrowCallbacks)
  }

  let mediumCallback = () => {
    setDialog(
      <Dialog>
        Wow! That’s a great spot to plant your seeds!
      </Dialog>
    )
    setEnableCallbacks(false)
    setPlotsShown(['medium'])

    setNextArrowCallbacks(correctNextArrowCallbacks)
  }

  let wetCallback = () => {
    setDialog(
      <Dialog>
        This spot has very wet soil because there is too much water.
        <br/>
        It’s not the best spot for your seeds.
      </Dialog>
    )
    setEnableCallbacks(false)
    setPlotsShown(['wet'])

    setNextArrowCallbacks(incorrectNextArrowCallbacks)
  }


  return (
    <>
      <GameBackground />
      {dialog
      }
      <div className={styles.plotsContainer}>
        {plotsShown.includes('dry') &&
          <ChoicePlot onClick={() => {
            enableCallbacks && dryCallback()
          }} wetness={'dry'}/>
        }
        {plotsShown.includes('medium') &&
          <ChoicePlot onClick={() => {
            enableCallbacks && mediumCallback()
          }} wetness={'medium'}/>
        }
        {plotsShown.includes('wet') &&
          <ChoicePlot onClick={() => {
            enableCallbacks && wetCallback()
          }} wetness={'wet'}/>
        }
      </div>
      {nextArrowCallbacks.length &&
        <NextArrow callbacks={nextArrowCallbacks} setCallbacks={setNextArrowCallbacks} />
      }
    </>
  )
}
