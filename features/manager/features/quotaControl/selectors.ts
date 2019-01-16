import { State } from '@app/lib/store'

export const getTrelloUrl = (state: State) =>
  state.manager.quotaControl.claimBoardCard &&
  state.manager.quotaControl.claimBoardCard.url
