import { AppContext, ServerError } from '@app/lib/server-types'

import { handleUnauthorized } from './handleUnauthorized'

export const tapOrHandle = (context: AppContext) => (error: ServerError) => handleUnauthorized(error, context.res)
