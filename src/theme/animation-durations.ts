import {CSSProperties} from 'react'

export const TIME_LAPSE = 5
export const SHOVEL = 2
export const WATER = 2.5
export const SCISSORS = 4
export const WORMS = 4
export const DEFINITION_ARROW = 3

/*
  The compiler does not see css variable declarations that are done via the style attribute (which is how this STYLES
  constant will be utilized). So, whenever someone adds a CSS custom property here, such as --time-lapse-duration, they
  should also add it to animation-durations.include.css so that IDEs know that the variables have been declared.
  We are setting these variables in this way in order to make the duration of these animations visible as a global
  variable in both css and ts files, with only one point of change.
  That point of change for each of the animations is one of the constants exported above.
 */
const STYLES = {
  '--time-lapse-duration': `${TIME_LAPSE}s`,
  '--shovel-duration': `${SHOVEL}s`,
  '--water-duration': `${WATER}s`,
  '--scissors-duration': `${SCISSORS}s`,
  '--worms-duration': `${WORMS}s`,
  '--definition-arrow-duration': `${DEFINITION_ARROW}s`,
}
export default STYLES as CSSProperties