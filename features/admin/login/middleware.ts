import { createErrorMiddleware } from '@breadhead/thunk-error'

import { checkForAuthError } from './helpers/checkForAuthError'
import { actions } from './reducer'

export const unauthorizedMiddleware = createErrorMiddleware(
  checkForAuthError,
  () => actions.authViolateStatus(true),
)
