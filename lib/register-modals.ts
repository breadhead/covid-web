import { FinishModal } from '@app/features/client/features/consultation'
import { SignUpModal, SmsConfirmModal } from '@app/features/login'
import { RefuseModal } from '@app/features/manager/features/closeClaim'

const modals = [SmsConfirmModal, SignUpModal, FinishModal, RefuseModal]

export default () => modals
