import { ServerError } from '@app/lib/server-types'

export const checkForAuthError = (error: ServerError) =>
  !!error.response &&
  (error.response.status === 401 || error.response.status === 403)
