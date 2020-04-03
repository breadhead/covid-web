import Container from './container'
import Modal from './organisms/Modal'

export default Container(Modal)

export { reducer, actions, ACCOUNT_EXISTS_STATUS } from './reducer'
export type { State, Actions } from './reducer'

export { default as withSignUpModal } from './withSignUpModal'
export type { WithSignUpModal } from './withSignUpModal'

export { MODAL_KEY } from './container'
