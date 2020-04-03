import Container from './container'
import { ModalDispatcher } from './helpers/ModalDispatcher'

export default Container

export { reducer, actions } from './reducer'
export type { State } from './reducer'
export { default as withModal } from './withModal'
export type { WithModalProps } from './withModal'

export const { isModal } = ModalDispatcher.getInstance()

export { useModal } from './useModal'
export { useSpecificModal } from './useSpecificModal'
