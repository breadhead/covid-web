import { State } from '@app/lib/store'

export const getCreatedId = (state: State) => state.client.newClaim.createdId
