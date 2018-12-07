import { Action } from 'redux'
import { createSymbiote, Symbiote } from 'redux-symbiote'

export interface FetchingState {
  fetching: boolean
  error: boolean | string
}

export const createInitialState = <AdditionalState>(state: AdditionalState) =>
  ({
    fetching: false,
    error: false,
    ...((state || {}) as object),
  } as AdditionalState & FetchingState)

export interface FetchingActions {
  request(): Action
  error(error: string | boolean): Action
}

export const requestSymbiote = <AnyState extends FetchingState>(
  state: AnyState,
) =>
  ({
    ...((state || {}) as object),
    fetching: true,
    error: false,
  } as AnyState)

export const errorSymbiote = <AnyState extends FetchingState>(
  state: AnyState,
  error: boolean | string,
) =>
  ({
    ...((state || {}) as object),
    error,
    fetching: false,
  } as AnyState)

export const createFetchingSymbiote = <
  State extends FetchingState,
  Actions extends FetchingActions
>(
  initialState: State,
  successSymbiote: (state: State, ...payload: any[]) => State,
  prefix: string,
  additionalSymbiotes: { [key: string]: Symbiote<State> } = {},
) =>
  createSymbiote<State, Actions>(
    initialState,
    {
      request: requestSymbiote,
      success: (state: State, ...payload: any[]) => ({
        ...(successSymbiote(state, ...payload) as {}),
        fetching: false,
        error: false,
      }),
      error: errorSymbiote,
      ...additionalSymbiotes,
    } as any,
    prefix,
  )
