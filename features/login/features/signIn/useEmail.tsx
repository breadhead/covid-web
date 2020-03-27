import { useMappedState } from 'redux-react-hook'
import { getUserLogin } from '@app/features/login/features/user/selectors'
import { getUserEmailLocalStorage } from '@app/features/login/features/signIn/userLocalStorage'

export function useEmail() {
  const login = useMappedState(getUserLogin)
  const emailLocalStorage = getUserEmailLocalStorage()
  const email = login && emailLocalStorage ? emailLocalStorage : undefined
  return email
}
