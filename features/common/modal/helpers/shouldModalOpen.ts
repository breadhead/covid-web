import { EMPTY_MODAL } from '../reducer'

import { ModalDispatcher } from './ModalDispatcher'
import UnknownModalException from './UnknownModalException'

export const shouldOpenModal = (modal: string) => {
  const allowedKeys = [...ModalDispatcher.getInstance().keys, EMPTY_MODAL]

  if (!allowedKeys.includes(modal)) {
    throw new UnknownModalException(modal)
  }

  return modal !== EMPTY_MODAL
}
