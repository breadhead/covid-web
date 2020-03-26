import * as React from 'react'
import { Button, ButtonKind } from '@app/src/ui/button'

import * as styles from './AskButton.css'
import { useModal } from '@app/features/common/modal'
import { useMappedState } from 'redux-react-hook'
import { selectToken } from '../../../home/molecules/StartConsultationButton/selectors'

const SIGN_IN_MODAL = 'signIn'

interface AskButtonProps {
  children: any
}

export const AskButton = ({ children }: AskButtonProps) => {
  const { open } = useModal()

  const token = useMappedState(selectToken)

  const onButtonClick = () => {
    if (!!token) {
      ;(window as any).Intercom('show')
    } else {
      open(SIGN_IN_MODAL)
    }
  }

  return (
    <Button
      onClick={onButtonClick}
      className={styles.button}
      kind={ButtonKind.Secondary}
    >
      {children}
    </Button>
  )
}
