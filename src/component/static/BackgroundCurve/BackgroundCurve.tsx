import styles from './BackgroundCurve.module.css'

type Color = "one" | "two" | "three" | "four" | "page-background"

interface Props {
  color: Color
}

export default function BackgroundCurve(props: Props) {
  let classes: string[] = [];
  switch (props.color) {
    case 'one':
      classes.push(styles.colorOne)
      break
    case 'two':
      classes.push(styles.colorTwo)
      break
    case 'three':
      classes.push(styles.colorThree)
      break
    case 'four':
      classes.push(styles.colorFour)
      break
    case 'page-background':
      classes.push(styles.colorPageBackground)
      break
  }

  classes.push(styles.backgroundCurve)

  return (
    <svg
      width="1440" height="111" viewBox="0 0 1440 111"
      fill="white" xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className={classes.join(' ')}
    >
      <path d="
        M 927.581 24.7873
        C 587.112 78.3668
          270.188 187.568
          0 24.7873
        V 0
        H 1440
        V 24.7873
        C 1363.65 7.08485
          1284.9 0.0114873
          1207 0
        C 1206.88 0
          1206.75 0
          1206.62 0
        C 1112.21 0.0139165
          1019.05 10.3935
          927.581 24.7873
        Z"
      />
    </svg>
  )
}