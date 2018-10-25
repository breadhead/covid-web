import { ExpressError } from '@app/lib/server-types'

export const checkForAuthError = (error: ExpressError) =>
  error.response && error.response.status === 401
