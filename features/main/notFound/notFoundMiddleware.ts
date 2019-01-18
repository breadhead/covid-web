import { createErrorMiddleware } from '@breadhead/thunk-error'

export default createErrorMiddleware(
  err => err && err.response && err.response.status === 404,
  () => console.log('$)$') as any,
)
