import { SignUpModal, SmsConfirmModal } from '@app/features/login'
import { RestorePasswordModal } from '@app/features/login/features/restorePassword'

const modals = [
  SmsConfirmModal,
  SignUpModal,
  RestorePasswordModal,
]

export default () => modals
