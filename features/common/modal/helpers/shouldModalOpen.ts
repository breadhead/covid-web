import ModalDispatcher from '../ModalDispatcher'
import { EMPTY_MODAL } from '../reducer'

export const shouldOpenModal = (modal: string) =>
  modal !== EMPTY_MODAL &&
    ModalDispatcher.getInstance().keys.includes(modal)
