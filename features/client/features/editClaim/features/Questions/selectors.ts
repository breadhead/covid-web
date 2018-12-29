import { State } from '@app/lib/store'
export const getQuestionsError = (state: State) =>
  state.client.editClaim.questions.error
