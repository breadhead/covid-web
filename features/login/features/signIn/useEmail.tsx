import { useMappedState } from 'redux-react-hook'
import { getUserEmail } from "./selectors/getUserEmail"

export function useEmail() {
  const emailLocalStorage = useMappedState(getUserEmail)
  const email = emailLocalStorage || undefined
  return email
}
