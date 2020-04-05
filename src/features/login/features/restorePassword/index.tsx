import Container from './container';
import {
  RESTORE_PASSWORD_MODAL_KEY,
  RestorePasswordModal,
} from './organisms/Modal';

export { reducer, actions } from './reducer';
export type { State, Actions } from './reducer';
export { OpenRestorePasswordModalButton } from './molecules/open-restore-password-modal-button';

export default Container(RestorePasswordModal);
export { RestorePasswordModal };
export { RESTORE_PASSWORD_MODAL_KEY };
