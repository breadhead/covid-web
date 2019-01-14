import { combineReducers } from 'redux'

export { default as DoctorConsultation } from './features/consultation'
export { default as DoctorAnswers } from './features/answers'

import {
  reducer as answersReducer,
  State as AnswersState,
} from './features/answers'

export interface State {
  answers: AnswersState
}

export const reducer = combineReducers({
  answers: answersReducer,
} as any)
