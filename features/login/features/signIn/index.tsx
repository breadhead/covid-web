import Container from './container'
import Modal from './organisms/Modal'
import { actions } from './reducer'

export { MODAL_KEY } from './container'

export { State, reducer, Actions, actions } from './reducer'

export const authViolateStatus = (value: boolean) =>
  actions.authViolateStatus(value)

export { login } from './actions'
export { unauthorizedMiddleware } from './middleware'
export { getViolateState } from './selectors'
export { default as withLoginModal, WithLoginModal } from './withLoginModal'

export default Container(Modal)