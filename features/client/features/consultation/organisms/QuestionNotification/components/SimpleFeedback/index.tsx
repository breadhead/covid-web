import * as React from 'react'
import * as styles from './../../QuestionNotification.css'
import routes from '@app/routes'

import { NON_BREAKING_SPACE } from '@app/lib/config'
import { Button, ButtonKind, ButtonSize } from '@front/ui/button'
import { FinishButton } from '../../../../molecules/FinishButton'

const { Router } = routes

interface Props {
  onNoButtonClick: () => void
  claimId: string
}

const SimpleFeedback = ({ onNoButtonClick, claimId }: Props) => {
  const denialClick = () => {
    onNoButtonClick()
    Router.pushRoute(`/?donation`)
  }

  return (
    <>
      <h3 className={styles.title}>
        Эксперт понятно ответил на{NON_BREAKING_SPACE}все ваши вопросы?
      </h3>
      <FinishButton claimId={claimId} className={styles.finishButton} />
      <Button
        className={styles.refuseButton}
        onClick={denialClick}
        size={ButtonSize.ExtraLarge}
        kind={ButtonKind.Extra}
      >
        Нет
      </Button>
    </>
  )
}
export { SimpleFeedback }
