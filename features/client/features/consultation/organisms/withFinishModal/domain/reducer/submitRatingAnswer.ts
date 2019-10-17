import { Action } from 'redux'
import {
  createFetchingSymbiote,
  createInitialState,
  FetchingState,
  FetchingActions,
} from '@app/lib/symbioteFactory'
import { RatingAnswerI } from '../../organisms/RatingQuestion/RatingAnswerI'
import { RatingQuestionsEnum } from '../../organisms/RatingQuestion/RatingQuestionsEnum'

interface Actions extends FetchingActions {
  submitRatingAnswer(data: RatingAnswerI): Action
}

interface State extends FetchingState {
  data: RatingAnswerI
}

const initialState = createInitialState({
  data: {
    claimId: 'id',
    question: RatingQuestionsEnum.Q1,
    answer: 'answer',
  },
})

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State) => ({
    ...state,
  }),
  'client/submit-question-answer',
  {
    submitRatingAnswer: (state: State, data: RatingAnswerI) => ({
      ...state,
      data,
      fetching: false,
      error: false,
    }),
  },
)

export { State, reducer, Actions, actions }
