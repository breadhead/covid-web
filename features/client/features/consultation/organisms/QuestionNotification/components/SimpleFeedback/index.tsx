import * as React from 'react'
import * as styles from './../../QuestionNotification.css'

import { NON_BREAKING_SPACE } from '@app/lib/config'
import { Button, ButtonKind, ButtonSize } from '@front/ui/button'
import FinishButton from '../../../../molecules/FinishButton'

interface Props {
  onNoButtonClick: () => void
}

const SimpleFeedback = ({ onNoButtonClick }: Props) => (
  <>
    <h3 className={styles.title}>
      Эксперт понятно ответил на{NON_BREAKING_SPACE}все ваши вопросы?
    </h3>
    <FinishButton className={styles.finishButton} />
    <Button
      className={styles.refuseButton}
      onClick={onNoButtonClick}
      size={ButtonSize.ExtraLarge}
      kind={ButtonKind.Extra}
    >
      Нет
    </Button>
  </>
)

export default SimpleFeedback
