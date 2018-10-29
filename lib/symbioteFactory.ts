export const requestSymbiote = <AnyState extends { fetching: boolean, error: false | string }>(state: AnyState) =>
  ({
    ...(state || {}) as object, fetching: true, error: false,
  } as AnyState)

export const errorSymbiote = <AnyState extends { error: false | string, fetching: boolean }>
  (state: AnyState, error: string) =>
  ({
    ...(state || {}) as object, error, fetching: false,
  } as AnyState)
