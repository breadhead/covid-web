import { createStore, applyMiddleware, Dispatch, AnyAction } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

export interface State {
  lastUpdate: number
  light: boolean
  count: number
}

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0
} as State

export const actionTypes = {
  TICK: 'TICK',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET'
}

// REDUCERS
export const reducer = (state = exampleInitialState, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      })
    case actionTypes.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      })
    case actionTypes.DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1
      })
    case actionTypes.RESET:
      return Object.assign({}, state, {
        count: exampleInitialState.count
      })
    default: return state
  }
}

// ACTIONS
export const serverRenderClock = (isServer: boolean) => (dispatch: Dispatch<any>) => {
  return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() })
}

export const startClock = (dispatch: Dispatch<any>) => {
  return setInterval(() => {
    // Dispatch `TICK` every 1 second
    dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() })
  }, 1000)
}

export const incrementCount = () => (dispatch: Dispatch<any>) => {
  return dispatch({ type: actionTypes.INCREMENT })
}

export const decrementCount = () => (dispatch: Dispatch<any>) => {
  return dispatch({ type: actionTypes.DECREMENT })
}

export const resetCount = () => (dispatch: Dispatch<any>) => {
  return dispatch({ type: actionTypes.RESET })
}

export const initializeStore = (initialState: State = exampleInitialState) =>
  createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
