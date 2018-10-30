import { Action } from 'redux'

export interface FetchingState {
  fetching: boolean,
  error: boolean | string
}

export const createInitialState = <AdditionalState>(state: AdditionalState) => ({
  fetching: false,
  error: false,
  ...(state || {}) as object,
} as (AdditionalState & FetchingState))

export interface FetchingActions {
  error(error: string | boolean): Action
}

export const requestSymbiote = <AnyState extends FetchingState>(state: AnyState) =>
  ({
    ...(state || {}) as object,
    fetching: true,
    error: false,
  } as AnyState)

export const errorSymbiote = <AnyState extends FetchingState>
  (state: AnyState, error: boolean | string) =>
  ({
    ...(state || {}) as object,
    error,
    fetching: false,
  } as AnyState)
