import { ModalState } from '../reducer'

export const shouldOpenModal = (modal: ModalState) =>
  modal !== ModalState.empty &&
  Object.values(ModalState).includes(modal)
