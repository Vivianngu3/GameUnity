import styles from './BackgroundCurve.module.css'

type Color = "primary" | "secondary" | "tertiary" | "page-background"

interface Props {
  color: Color
}

export default function BackgroundCurve(props: Props) {
  let classes: string[] = [];
  switch (props.color) {
    case 'primary':
      classes.push(styles['color-primary'])
      break
    case 'secondary':
      classes.push(styles['color-secondary'])
      break
    case 'tertiary':
      classes.push(styles['color-tertiary'])
      break
    case 'page-background':
      classes.push(styles['color-page-background'])
      break
  }

  classes.push(styles['background-curve'])

  return (
    <svg
      width="1440" height="111" viewBox="0 0 1440 111"
      fill="white" xmlns="http://www.w3.org/2000/svg"
      className={classes.join(' ')}
    >
      <path d="
        M 927.581 24.7873
        C 587.112 78.3668
          270.188 187.568
          0 24.7873
        V -20
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