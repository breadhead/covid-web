import Container from './container'
import RestorePasswordModal from './organisms/Modal'
import { actions } from './reducer'

export { State, reducer, Actions, actions } from './reducer'

export const authViolateStatus = (value: boolean) =>
  actions.authViolateStatus(value)

export { login } from './actions'
export { getViolateState } from './selectors'

export default Container(RestorePasswordModal)
export { RestorePasswordModal }
