import { RestorePasswordModal } from '@app/src/features/login/features/restorePassword';

import SignUpModal from '../features/login/features/signUp';
import SignInModal from '../features/login/features/signIn';

const modals = [SignUpModal, SignInModal, RestorePasswordModal];

export default () => modals;
