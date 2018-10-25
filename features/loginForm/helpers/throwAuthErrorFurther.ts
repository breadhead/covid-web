import { checkForAuthError } from './checkForAuthError'

export const throwAuthErrorFurther = (error) => {
  if (checkForAuthError(error)) {
    throw error
  }
}
