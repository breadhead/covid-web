import * as React from 'react'
import * as styles from './../../QuestionNotification.css'

import { Button, ButtonKind, ButtonSize } from '@front/ui/button'
import FinishButton from '../../../../molecules/FinishButton'

interface Props {
  onNoButtonClick: React.Dispatch<React.SetStateAction<boolean>>
}

const SimpleFeedback = ({ onNoButtonClick }: Props) => (
  <>
    <h3 className={styles.title}>
      Эксперт понятно ответил на все ваши вопросы?
    </h3>
    <FinishButton className={styles.finishButton} />
    <Button
      onClick={() => onNoButtonClick(false)}
      size={ButtonSize.ExtraLarge}
      kind={ButtonKind.Extra}
    >
      Нет
    </Button>
  </>
)

export default SimpleFeedback
