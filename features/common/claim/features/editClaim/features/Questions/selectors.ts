import { State } from '@app/lib/store'

export const getQuestionsError = (state: State) =>
  state.claim.editClaim.questions.error

export const getQuestionsLoading = (state: State) =>
  state.claim.editClaim.questions.fetching
