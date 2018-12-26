import { combineReducers } from 'redux'

export { default as ClaimStep2 } from './features/Step2'
export { default as ClaimStep3 } from './features/Step3'
import { reducer as step2Reducer, State as Step2State } from './features/Step2'

export interface State {
  step2: Step2State
  step3: Step2State
}

export const reducer = combineReducers({
  step2: step2Reducer,
  step3: step2Reducer,
} as any)
