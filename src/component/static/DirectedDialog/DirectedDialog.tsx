import React from 'react'
import styles from './DirectedDialog.module.css'
import Block from '../../text/Block'

type Positioning = 'fixed-anchor' | 'static-anchor'
type Side = 'left' | 'right'

interface Props {
  anchor: JSX.Element
  positioning: Positioning
  side?: Side
}

export default function DirectedDialog(props: React.PropsWithChildren<Props>) {
  const [containerStyle, setContainerStyle] = React.useState({})

  let wrapperRef = React.useCallback(node => {
    if (node !== null) {
      let anchor = node.children[0]
      let posInfo = anchor.getBoundingClientRect()
      // TODO: Remove console log
      console.log(posInfo)
      let left;
      let top;
      switch (props.side) {
        case ('left'):
          left = Math.round(posInfo.left)
          top = Math.round(posInfo.top)
          break;
        default:
          left = Math.round(posInfo.left)
          top = Math.round(posInfo.top)
          break;
      }
      setContainerStyle({
        position: "fixed",
        left: left + 'px',
        top: top + 'px',
      })
    }
  }, [props.side])

  let sideClass: string;
  switch (props.side) {
    case 'left':
      sideClass = styles.left
      break
    default:
      sideClass = styles.right
  }
  return (
    <div ref={wrapperRef}>
      {props.anchor} {/* the useCallback ref relies on props.anchor being the ref's zeroth child */}
      <div
        className={styles.container}
        style={containerStyle}
      >
        <div className={styles.dialog}>
          <Block>
            {props.children}
          </Block>
        </div>
        <svg width="97" height="65" viewBox="0 0 97 65" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.arrow + sideClass}>
          <path d="M90.9835 62.0142L47.7674 6.60461L44.9758 4.40999L3.47613 20.9103L3.97614 21.4103L3.7674 22.6046L90.9835 62.0142Z" fill="#FFF3E8"/>
          <path d="M47.9761 4.91016L92.2683 63.6045L2.97607 22.4102" stroke="#937356" strokeWidth="3"/>
        </svg>
      </div>
    </div>
  )
}