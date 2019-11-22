import { State } from '@app/lib/store'

export const selectRatingQuestions = (state: State) =>
  state.rating.ratingQuestions.data
