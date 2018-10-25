import { ExpressError } from '../container'

export const checkForAuthError = (error: ExpressError) =>
  error.response && error.response.status === 401
