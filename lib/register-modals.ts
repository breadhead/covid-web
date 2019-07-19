import { FinishModal } from '@app/features/client/features/consultation'
import { SignUpModal, SmsConfirmModal } from '@app/features/login'
import { RefuseModal } from '@app/features/manager/features/closeClaim'
import { RestorePasswordModal } from '@app/features/login/features/restorePassword'

const modals = [
  SmsConfirmModal,
  SignUpModal,
  FinishModal,
  RefuseModal,
  RestorePasswordModal,
]

export default () => modals
