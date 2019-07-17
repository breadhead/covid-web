import Container from './container'
import {
  RestorePasswordModal,
  RESTORE_PASSWORD_MODAL_KEY,
} from './organisms/Modal'
export { State, reducer, Actions, actions } from './reducer'
export {
  OpenRestorePasswordModalButton,
} from './molecules/open-restore-password-modal-button'

export default Container(RestorePasswordModal)
export { RestorePasswordModal }
export { RESTORE_PASSWORD_MODAL_KEY }
