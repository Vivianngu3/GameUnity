import React from 'react'
import styles from './DirectedDialog.module.css'
import Block, {Size as TextSize} from '../../text/Block'

export type Side = 'left' | 'right'

interface Props {
  anchor: JSX.Element
  closeness?: number
  closenessCoordinates?: {x: number, y:number}
  textSize?: TextSize
  side?: Side
}

export default function DirectedDialog(props: React.PropsWithChildren<Props>) {
  const [containerStyle, setContainerStyle] = React.useState({})
  const [windowDimensions, setWindowDimensions] = React.useState<{width: number, height:number}>({width: 0, height: 0})
  const needRefresh = React.useRef(false)

  let wrapperRef = React.useCallback(node => {
    if (node !== null) {
      let anchor = node.children[0]
      let posInfo = anchor.getBoundingClientRect()
      let xOffset = props.closenessCoordinates?.x || props.closeness || 0
      let yOffset = props.closenessCoordinates?.y || props.closeness || 0
      let top = Math.round(posInfo.top + yOffset)
      let left;
      if (props.side === 'left') {
        left = posInfo.left + xOffset
      } else {
        left = posInfo.right - xOffset
      }
      needRefresh.current = top > windowDimensions.height || top < 0 || left > windowDimensions.width || left < 0;
      let builtStyles = {
        position: "fixed",
        top: top + 'px',
      }
      Object.assign(builtStyles, {
        left: Math.round(left) + 'px'
      })
      setContainerStyle(builtStyles)
    }
  }, [props.closeness, props.closenessCoordinates, props.side, windowDimensions])

  React.useEffect(() => {
    let timerId: NodeJS.Timer;
    if (needRefresh) {
      timerId = setTimeout(() => {
        // Set to width minus 1 so that the state is changed and a rerender is triggered, reassessing where the dialog should be positioned
        setWindowDimensions({ width: window.innerWidth - 1, height: window.innerHeight })
      }, 15)
    }
    return () => { timerId && clearInterval(timerId) }
  }, [ needRefresh ])

  React.useEffect(() => {
    let resizeHandler = () => {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight })
    }
    window.addEventListener("resize", resizeHandler)
  }, [])

  let sideClass = (props.side === 'left') ? styles.left : styles.right

  return (
    <div ref={wrapperRef}>
      {props.anchor} {/* the useCallback ref relies on props.anchor being the ref's zeroth child */}
      <div
        className={styles.container}
        style={containerStyle}
      >
        <div className={styles.dialog + ' ' + sideClass}>
          <Block size={props.textSize}>
            {props.children}
          </Block>
        </div>
        <svg width="97" height="65" viewBox="0 0 97 65" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.arrow + ' ' + sideClass}>
          <path d="M90.9835 62.0142L47.7674 6.60461L44.9758 4.40999L3.47613 20.9103L3.97614 21.4103L3.7674 22.6046L90.9835 62.0142Z" fill="#FFF3E8"/>
          <path d="M47.9761 4.91016L92.2683 63.6045L2.97607 22.4102" stroke="#937356" strokeWidth="3"/>
        </svg>
      </div>
    </div>
  )
}