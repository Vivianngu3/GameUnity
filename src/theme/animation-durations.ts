import {CSSProperties} from 'react'

export const TIME_LAPSE = 5
export const SHOVEL = 2
export const SCISSORS = 4

/*
  The suppression of errors will be necessary wherever these variables are used because the compiler does not see css
  variable declarations that are done via the style attribute.
  We are setting these variables in this way in order to make the duration of these animations visible as a global
  variable in both css and ts files, with only one point of change.
  That point of change for each of the animations is one of the constants exported above.
 */
const STYLES = {
  '--time-lapse-duration': `${TIME_LAPSE}s`,
  '--shovel-duration': `${SCISSORS}s`,
  '--scissors-duration': `${SCISSORS}s`,
}
export default STYLES as CSSProperties