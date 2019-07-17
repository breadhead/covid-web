import Container from './container'
import Modal from './organisms/Modal'
import { actions } from './reducer'

export { MODAL_KEY } from './container'

export { State, reducer, Actions, actions } from './reducer'

export const authViolateStatus = (value: boolean) =>
  actions.authViolateStatus(value)

export { loginAction } from './actions'
export { unauthorizedMiddleware } from './middleware'
export { getViolateState } from './selectors'
export { default as withSignInModal, WithSignInModal } from './withSignInModal'

export default Container(Modal)
