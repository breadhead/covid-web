import * as React from 'react'
import * as styles from './OpenSignUpModalButton.css'

import NavLink from '@app/ui/atoms/NavLink'

interface Props {
  openSignUp: () => void
}

const OpenSignUpModalButton = ({ openSignUp }: Props) => (
  <button
    type="button"
    className={styles.openSignUpButton}
    onClick={openSignUp}
  >
    <NavLink href="" className={styles.link}>
      Зарегистрироваться
    </NavLink>
  </button>
)

export default OpenSignUpModalButton
