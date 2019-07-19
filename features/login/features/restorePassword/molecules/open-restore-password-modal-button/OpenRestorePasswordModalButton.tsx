import * as React from 'react'
import * as styles from './OpenRestorePasswordModalButton.css'
import withRestorePasswordModal from '../../hoc/withRestorePasswordModal'

interface Props {
  openModal: () => void
}

const OpenRestorePasswordModalButton = ({ openModal }: Props) => {
  return (
    <button onClick={openModal} className={styles.button}>
      Забыли пароль?
    </button>
  )
}

export default withRestorePasswordModal(OpenRestorePasswordModalButton)
