import Container from './container'
import { ModalDispatcher } from './helpers/ModalDispatcher'

export default Container

export { reducer, State, actions } from './reducer'
export { default as withModal, WithModalProps } from './withModal'

export const { isModal } = ModalDispatcher.getInstance()

export { useModal } from './useModal'
export { useSpecificModal } from './useSpecificModal'
