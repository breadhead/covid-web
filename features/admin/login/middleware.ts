import { Dispatch, Middleware, MiddlewareAPI } from 'redux'

import { checkForAuthError } from './helpers/checkForAuthError'
import { actions } from './reducer'

export const unauthorizedMiddleware: Middleware =
  (middleware: MiddlewareAPI<any>) =>
    (next: Dispatch<any>) =>
      (action: any) => next(
        action instanceof Function
          ? addErrorHandling(middleware)(action)
          : action,
      )

// tslint:disable-next-line:ban-types
const addErrorHandling = (middleware: MiddlewareAPI<any>) => {

  const handleUnauthorized = (err: any) => {
    if (checkForAuthError(err)) {
      middleware.dispatch(actions.authViolateStatus(true))
    }
  }

  // tslint:disable-next-line:ban-types
  return (fnAction: Function) =>
    (...args: any[]) => {
      let result

      try {
        result = fnAction(...args)
      } catch (err) {
        handleUnauthorized(err) // sync error in reducer within a thunk
      }

      return result instanceof Promise
        ? result.catch(handleUnauthorized) // async error in thunk
        : result
    }
}
