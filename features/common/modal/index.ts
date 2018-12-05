import Container from './container'
import ModalDispatcher from './ModalDispatcher'

export default Container

export { reducer, State, actions } from './reducer'
export { default as withModal, WithModalProps } from './withModal'

export const isModal = ModalDispatcher.getInstance().isModal
