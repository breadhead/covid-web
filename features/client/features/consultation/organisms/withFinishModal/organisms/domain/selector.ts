import { State } from '@app/lib/store'

export const selectRatingAnswerError = (state: State) => state.rating.error
