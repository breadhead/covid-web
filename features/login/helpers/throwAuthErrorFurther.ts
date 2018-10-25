import { checkForAuthError } from './checkForAuthError'

export const throwAuthErrorFurther = (error: Error) => {
  if (checkForAuthError(error)) {
    throw error
  }
}
