import * as React from 'react'
import * as styles from './OpenSignUpModalButton.css'

import NavLink from '@app/ui/atoms/NavLink'

import { withSignUpModal } from '@app/features/login'

interface Props {
  onFormSubmit: () => Promise<any>
  error: boolean | string
  openSignUp: () => void
}

const OpenSignUpModalButton = ({ openSignUp }: Props) => (
  <button
    type="button"
    className={styles.openSignUpButton}
    onClick={openSignUp}
  >
    <NavLink href="#" className={styles.link}>
      Зарегистрироваться
    </NavLink>
  </button>
)

export default withSignUpModal(OpenSignUpModalButton)
