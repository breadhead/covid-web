import { State } from '@app/lib/store'

export const getTransactions = (state: State) => state.history.transactions

export const getLoading = (state: State) => state.history.fetching
