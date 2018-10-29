import { throwAuthErrorFurther } from '../features/login'

import { Dispatch, Middleware, MiddlewareAPI } from 'redux'

export const unauthorizedMiddleware: Middleware =
  (_: MiddlewareAPI<any>) =>
    (next: Dispatch<any>) =>
      (action: any) => next(
        action instanceof Function
          ? addErrorHandling(action)
          : action,
      )

// tslint:disable-next-line:ban-types
const addErrorHandling = (fnAction: Function) =>
  (...args: any[]) => {
    let result

    try {
      result = fnAction(...args)
    } catch (err) {
      throwAuthErrorFurther(err) // sync error in reducer within a thunk
    }

    return result instanceof Promise
      ? result.catch(throwAuthErrorFurther) // async error in thunk
      : result
  }
