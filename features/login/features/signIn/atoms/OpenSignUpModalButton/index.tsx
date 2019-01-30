import Button, { ButtonKind } from '@app/ui/atoms/Button'
import * as React from 'react'
import * as styles from './OpenSignUpModalButton.css'

interface Props {
  openSignUp: () => void
}

const OpenSignUpModalButton = ({ openSignUp }: Props) => (
  <Button
    className={styles.openSignUpButton}
    onClick={openSignUp}
    kind={ButtonKind.Secondary}
  >
    Зарегистрироваться
  </Button>
)

export default OpenSignUpModalButton
