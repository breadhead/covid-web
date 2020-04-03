import Container from './container'
import {
  RestorePasswordModal,
  RESTORE_PASSWORD_MODAL_KEY,
} from './organisms/Modal'
export { reducer, actions } from './reducer'
export type { State, Actions } from './reducer'
export {
  OpenRestorePasswordModalButton,
} from './molecules/open-restore-password-modal-button'

export default Container(RestorePasswordModal)
export { RestorePasswordModal }
export { RESTORE_PASSWORD_MODAL_KEY }
