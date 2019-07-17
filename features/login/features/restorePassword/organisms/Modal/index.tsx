import * as React from 'react'
import * as styles from './RestorePasswordModal.css'
import ModalFooter from '@app/features/login/organisms/Footer'
import { RestoreForm } from '../restore-form'
import { NewPasswordForm } from '../new-password-form'

interface Props {
  onFormSubmit: () => Promise<any>
  error: boolean | string
  openSignIn: () => void
  openSignUp: () => void
  phone: string | null
}

const RestorePasswordModal = ({
  onFormSubmit,
  openSignIn,
  openSignUp,
  phone
}: Props) => {
  return (
    <article className={styles.popup}>
      {!!phone ? (
        <NewPasswordForm
          phone={phone}
          onFormSubmit={() => console.log('login')}
        />
      ) : (
        <RestoreForm onFormSubmit={onFormSubmit} openSignUp={openSignUp} />
      )}
      <ModalFooter onOpenModalClick={openSignIn} />
    </article>
  )
}

export default RestorePasswordModal
