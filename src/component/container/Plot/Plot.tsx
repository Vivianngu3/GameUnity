import React from 'react'
import styles from './Plot.module.css'
import seeds from '../../../res/images/seeds-in-hole.svg'
import sprout from '../../../res/images/sprout.svg'
import starburst from '../../../res/images/starburst.svg'
import tomatoPlant from '../../../res/images/tomato-plant.png'
import fenceForeground from '../../../res/images/fence-foreground.svg'
import fenceBackground from '../../../res/images/fence-background.svg'
import DirectedDialog from '../../static/DirectedDialog/DirectedDialog'

export type Progress = "start" | "dug" | "seeds-sown" | "planted" | "watered" | "grown" | "protected" | "protected-tomato" | "tomato"

interface Props {
  progress?: Progress
  coverSeed?: () => void
  removeFence?: () => void
}

export default function Plot(props: Props) {
  let contained: JSX.Element
  switch (props.progress) {
    case 'dug':
      contained =
        <div className={styles.plotContents}>
          <svg viewBox="0 0 2 2" className={styles.hole}>
            <circle cx={1} cy={1} r={1}/>
          </svg>
        </div>
      break
    case 'seeds-sown':
      contained =
        <DirectedDialog
          side={'left'}
          anchor={
            <div
              className={styles.plotContents}
              onClick={() => {if (props.coverSeed) props.coverSeed()}}
            >
              <svg viewBox="0 0 2 2" className={styles.hole}>
                <circle cx={1} cy={1} r={1} />
              </svg>
              <img draggable={false} src={seeds} alt={'Seeds in a hole'} className={styles.seeds} />
            </div>
          }>Click to cover your seeds.</DirectedDialog>
      break
    case 'planted':
      contained =
        <div className={styles.plotContents}>
          <svg
            width="95" height="40" viewBox="0 0 95 40"
            fill="none" xmlns="http://www.w3.org/2000/svg"
            className={styles.pile + ' ' + styles.dry}
          >
            <path d="M44.3292 11.3409L45.4138 11.8833L46.1713 10.9364C51.0302 4.86297 55.5274 2.26185 59.611 1.72115C63.6978 1.18002 67.7101 2.65716 71.6967 5.47484C75.6893 8.29668 79.5106 12.3619 83.153 16.7266C84.9687 18.9024 86.7233 21.1318 88.4246 23.2992L88.6615 23.6011C90.1464 25.4931 91.5937 27.3371 92.9896 29.0284C92.919 30.7864 92.4941 32.1329 91.8383 33.1789C91.1191 34.3261 90.0568 35.2165 88.644 35.8903C85.7519 37.2696 81.5586 37.6646 76.5355 37.4818C71.8112 37.3099 66.5767 36.641 61.3532 35.9734C61.0676 35.9369 60.782 35.9004 60.4965 35.864C55.0354 35.1675 49.6001 34.4997 45 34.4997C40.3937 34.4997 35.238 35.1687 30.1911 35.8661C29.7583 35.9259 29.3263 35.9859 28.8954 36.0457C24.2561 36.6901 19.7457 37.3167 15.7077 37.4819C11.2545 37.6642 7.66571 37.2653 5.22838 35.9287C4.04571 35.2802 3.1399 34.4136 2.51671 33.2617C1.88727 32.0982 1.5 30.5571 1.5 28.4997C1.5 20.3504 7.4003 13.7796 15.9347 10.3476C24.4497 6.9234 35.2488 6.80062 44.3292 11.3409Z" />
          </svg>
        </div>
      break
    case 'watered':
      contained =
        <div className={styles.plotContents}>
          <svg
            width="95" height="40" viewBox="0 0 95 40"
            fill="none" xmlns="http://www.w3.org/2000/svg"
            className={styles.pile + ' ' + styles.wet}
          >
            <path d="M44.3292 11.3409L45.4138 11.8833L46.1713 10.9364C51.0302 4.86297 55.5274 2.26185 59.611 1.72115C63.6978 1.18002 67.7101 2.65716 71.6967 5.47484C75.6893 8.29668 79.5106 12.3619 83.153 16.7266C84.9687 18.9024 86.7233 21.1318 88.4246 23.2992L88.6615 23.6011C90.1464 25.4931 91.5937 27.3371 92.9896 29.0284C92.919 30.7864 92.4941 32.1329 91.8383 33.1789C91.1191 34.3261 90.0568 35.2165 88.644 35.8903C85.7519 37.2696 81.5586 37.6646 76.5355 37.4818C71.8112 37.3099 66.5767 36.641 61.3532 35.9734C61.0676 35.9369 60.782 35.9004 60.4965 35.864C55.0354 35.1675 49.6001 34.4997 45 34.4997C40.3937 34.4997 35.238 35.1687 30.1911 35.8661C29.7583 35.9259 29.3263 35.9859 28.8954 36.0457C24.2561 36.6901 19.7457 37.3167 15.7077 37.4819C11.2545 37.6642 7.66571 37.2653 5.22838 35.9287C4.04571 35.2802 3.1399 34.4136 2.51671 33.2617C1.88727 32.0982 1.5 30.5571 1.5 28.4997C1.5 20.3504 7.4003 13.7796 15.9347 10.3476C24.4497 6.9234 35.2488 6.80062 44.3292 11.3409Z" />
          </svg>
        </div>
      break
    // case 'growth1':
    //   contained =
    //     <div className={styles.plotContents}>
    //       <svg
    //         width="95" height="40" viewBox="0 0 95 40"
    //         fill="none" xmlns="http://www.w3.org/2000/svg"
    //         className={styles.pile + ' ' + styles.wet}
    //       >
    //         <path d="M44.3292 11.3409L45.4138 11.8833L46.1713 10.9364C51.0302 4.86297 55.5274 2.26185 59.611 1.72115C63.6978 1.18002 67.7101 2.65716 71.6967 5.47484C75.6893 8.29668 79.5106 12.3619 83.153 16.7266C84.9687 18.9024 86.7233 21.1318 88.4246 23.2992L88.6615 23.6011C90.1464 25.4931 91.5937 27.3371 92.9896 29.0284C92.919 30.7864 92.4941 32.1329 91.8383 33.1789C91.1191 34.3261 90.0568 35.2165 88.644 35.8903C85.7519 37.2696 81.5586 37.6646 76.5355 37.4818C71.8112 37.3099 66.5767 36.641 61.3532 35.9734C61.0676 35.9369 60.782 35.9004 60.4965 35.864C55.0354 35.1675 49.6001 34.4997 45 34.4997C40.3937 34.4997 35.238 35.1687 30.1911 35.8661C29.7583 35.9259 29.3263 35.9859 28.8954 36.0457C24.2561 36.6901 19.7457 37.3167 15.7077 37.4819C11.2545 37.6642 7.66571 37.2653 5.22838 35.9287C4.04571 35.2802 3.1399 34.4136 2.51671 33.2617C1.88727 32.0982 1.5 30.5571 1.5 28.4997C1.5 20.3504 7.4003 13.7796 15.9347 10.3476C24.4497 6.9234 35.2488 6.80062 44.3292 11.3409Z" />
    //       </svg>
    //       <img draggable={false} alt={'small sized sprout'} className={styles.sprout1} src={sprout}/>
    //     </div>
    //   break
    // case 'growth2':
    //   contained =
    //     <div className={styles.plotContents}>
    //       <svg
    //         width="95" height="40" viewBox="0 0 95 40"
    //         fill="none" xmlns="http://www.w3.org/2000/svg"
    //         className={styles.pile + ' ' + styles.wet}
    //       >
    //         <path d="M44.3292 11.3409L45.4138 11.8833L46.1713 10.9364C51.0302 4.86297 55.5274 2.26185 59.611 1.72115C63.6978 1.18002 67.7101 2.65716 71.6967 5.47484C75.6893 8.29668 79.5106 12.3619 83.153 16.7266C84.9687 18.9024 86.7233 21.1318 88.4246 23.2992L88.6615 23.6011C90.1464 25.4931 91.5937 27.3371 92.9896 29.0284C92.919 30.7864 92.4941 32.1329 91.8383 33.1789C91.1191 34.3261 90.0568 35.2165 88.644 35.8903C85.7519 37.2696 81.5586 37.6646 76.5355 37.4818C71.8112 37.3099 66.5767 36.641 61.3532 35.9734C61.0676 35.9369 60.782 35.9004 60.4965 35.864C55.0354 35.1675 49.6001 34.4997 45 34.4997C40.3937 34.4997 35.238 35.1687 30.1911 35.8661C29.7583 35.9259 29.3263 35.9859 28.8954 36.0457C24.2561 36.6901 19.7457 37.3167 15.7077 37.4819C11.2545 37.6642 7.66571 37.2653 5.22838 35.9287C4.04571 35.2802 3.1399 34.4136 2.51671 33.2617C1.88727 32.0982 1.5 30.5571 1.5 28.4997C1.5 20.3504 7.4003 13.7796 15.9347 10.3476C24.4497 6.9234 35.2488 6.80062 44.3292 11.3409Z" />
    //       </svg>
    //       <img draggable={false} alt={'medium sized sprout'} className={styles.sprout2} src={sprout}/>
    //     </div>
    //   break
    case 'grown':
      contained =
        <div className={styles.plotContents}>
          <svg
            width="95" height="40" viewBox="0 0 95 40"
            fill="none" xmlns="http://www.w3.org/2000/svg"
            className={styles.pile + ' ' + styles.wet}
          >
            <path d="M44.3292 11.3409L45.4138 11.8833L46.1713 10.9364C51.0302 4.86297 55.5274 2.26185 59.611 1.72115C63.6978 1.18002 67.7101 2.65716 71.6967 5.47484C75.6893 8.29668 79.5106 12.3619 83.153 16.7266C84.9687 18.9024 86.7233 21.1318 88.4246 23.2992L88.6615 23.6011C90.1464 25.4931 91.5937 27.3371 92.9896 29.0284C92.919 30.7864 92.4941 32.1329 91.8383 33.1789C91.1191 34.3261 90.0568 35.2165 88.644 35.8903C85.7519 37.2696 81.5586 37.6646 76.5355 37.4818C71.8112 37.3099 66.5767 36.641 61.3532 35.9734C61.0676 35.9369 60.782 35.9004 60.4965 35.864C55.0354 35.1675 49.6001 34.4997 45 34.4997C40.3937 34.4997 35.238 35.1687 30.1911 35.8661C29.7583 35.9259 29.3263 35.9859 28.8954 36.0457C24.2561 36.6901 19.7457 37.3167 15.7077 37.4819C11.2545 37.6642 7.66571 37.2653 5.22838 35.9287C4.04571 35.2802 3.1399 34.4136 2.51671 33.2617C1.88727 32.0982 1.5 30.5571 1.5 28.4997C1.5 20.3504 7.4003 13.7796 15.9347 10.3476C24.4497 6.9234 35.2488 6.80062 44.3292 11.3409Z" />
          </svg>
          <img draggable={false} alt={'full sized sprout'} className={styles.sprout3} src={sprout}/>
        </div>
      break
    // case 'with-starburst':
    //   contained =
    //     <DirectedDialog
    //       side={'left'}
    //       closenessCoordinates={{ x:-60, y:-120 }}
    //       anchor={
    //         <div className={styles.plotContents}>
    //           <svg
    //             width="95" height="40" viewBox="0 0 95 40"
    //             fill="none" xmlns="http://www.w3.org/2000/svg"
    //             className={styles.pile + ' ' + styles.wet}
    //           >
    //             <path d="M44.3292 11.3409L45.4138 11.8833L46.1713 10.9364C51.0302 4.86297 55.5274 2.26185 59.611 1.72115C63.6978 1.18002 67.7101 2.65716 71.6967 5.47484C75.6893 8.29668 79.5106 12.3619 83.153 16.7266C84.9687 18.9024 86.7233 21.1318 88.4246 23.2992L88.6615 23.6011C90.1464 25.4931 91.5937 27.3371 92.9896 29.0284C92.919 30.7864 92.4941 32.1329 91.8383 33.1789C91.1191 34.3261 90.0568 35.2165 88.644 35.8903C85.7519 37.2696 81.5586 37.6646 76.5355 37.4818C71.8112 37.3099 66.5767 36.641 61.3532 35.9734C61.0676 35.9369 60.782 35.9004 60.4965 35.864C55.0354 35.1675 49.6001 34.4997 45 34.4997C40.3937 34.4997 35.238 35.1687 30.1911 35.8661C29.7583 35.9259 29.3263 35.9859 28.8954 36.0457C24.2561 36.6901 19.7457 37.3167 15.7077 37.4819C11.2545 37.6642 7.66571 37.2653 5.22838 35.9287C4.04571 35.2802 3.1399 34.4136 2.51671 33.2617C1.88727 32.0982 1.5 30.5571 1.5 28.4997C1.5 20.3504 7.4003 13.7796 15.9347 10.3476C24.4497 6.9234 35.2488 6.80062 44.3292 11.3409Z" />
    //           </svg>
    //           <img draggable={false} alt={'full sized sprout'} className={styles.sprout3} src={sprout}/>
    //           <img draggable={false} alt={'golden background comic burst'} className={styles.starburst} src={starburst}/>
    //         </div>
    //       }
    //     >Look at your seed sprout!</DirectedDialog>
    //   break
    case 'protected':
      contained =
        <div className={styles.plotContents}>
          <svg
            width="95" height="40" viewBox="0 0 95 40"
            fill="none" xmlns="http://www.w3.org/2000/svg"
            className={styles.pile + ' ' + styles.wet}
          >
            <path d="M44.3292 11.3409L45.4138 11.8833L46.1713 10.9364C51.0302 4.86297 55.5274 2.26185 59.611 1.72115C63.6978 1.18002 67.7101 2.65716 71.6967 5.47484C75.6893 8.29668 79.5106 12.3619 83.153 16.7266C84.9687 18.9024 86.7233 21.1318 88.4246 23.2992L88.6615 23.6011C90.1464 25.4931 91.5937 27.3371 92.9896 29.0284C92.919 30.7864 92.4941 32.1329 91.8383 33.1789C91.1191 34.3261 90.0568 35.2165 88.644 35.8903C85.7519 37.2696 81.5586 37.6646 76.5355 37.4818C71.8112 37.3099 66.5767 36.641 61.3532 35.9734C61.0676 35.9369 60.782 35.9004 60.4965 35.864C55.0354 35.1675 49.6001 34.4997 45 34.4997C40.3937 34.4997 35.238 35.1687 30.1911 35.8661C29.7583 35.9259 29.3263 35.9859 28.8954 36.0457C24.2561 36.6901 19.7457 37.3167 15.7077 37.4819C11.2545 37.6642 7.66571 37.2653 5.22838 35.9287C4.04571 35.2802 3.1399 34.4136 2.51671 33.2617C1.88727 32.0982 1.5 30.5571 1.5 28.4997C1.5 20.3504 7.4003 13.7796 15.9347 10.3476C24.4497 6.9234 35.2488 6.80062 44.3292 11.3409Z" />
          </svg>
          <img draggable={false} alt={'full sized sprout'} className={styles.sprout3} src={sprout}/>
          <img draggable={false} alt={'back side of white fence'} className={styles.fenceBackground} src={fenceBackground} />
          <img draggable={false} alt={'front side of white fence'} className={styles.fenceForeground} src={fenceForeground} />
        </div>
      break
    case 'protected-tomato':
      contained =
        <div className={styles.plotContents}>
          <img draggable={false} alt={'fully grown plant with tomatoes'} className={styles.tomatoPlant} src={tomatoPlant} />
          <img draggable={false} alt={'back side of white fence'}
               onClick={() => {if (props.removeFence) props.removeFence()}}
               className={styles.fenceBackground} src={fenceBackground}
          />
          <img draggable={false} alt={'front side of white fence'}
               onClick={() => {if (props.removeFence) props.removeFence()}}
               className={styles.fenceForeground} src={fenceForeground}
          />
        </div>
      break
    case 'tomato':
      contained =
        <div className={styles.plotContents}>
          <img draggable={false} alt={'fully grown plant with tomatoes'} className={styles.tomatoPlant} src={tomatoPlant} />
        </div>
      break
    default:
      contained = <></>
  }
  return (
    <div className={styles.soil} >
      {contained}
    </div>
  )
}