import Container from './container'
import Modal from './organisms/Modal'

export default Container(Modal)

export { State, reducer, Actions, actions } from './reducer'

export { default as withSignUpModal, WithSignUpModal } from './withSignUpModal'

export { MODAL_KEY } from './container'
