import { ServerError } from '../container'

export const checkForAuthError = (error: ServerError) =>
  error.response && error.response.status === 401
