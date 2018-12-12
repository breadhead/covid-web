import { merge } from 'lodash'
import { getHeightWidth, getWindowWidth } from 'redux-windowsize'
import { createSelector } from 'reselect'

interface WindowSize {
  width: number
  height: number
}

// TODO: first any because State in JS and has no typings
// second and third any because `redux-windowsize` has no typings
const getWindowSize = createSelector<any, any, any, WindowSize>(
  getHeightWidth,
  getWindowWidth,
  merge,
)

export default getWindowSize

export { WindowSize }
