import * as React from 'react'
import { Button, ButtonKind, ButtonSize } from '@app/src/ui/button'
import * as s from './NextQuestionButton.css'
// import { DEFAULT_QUESTION_ID } from '../../organisms/RatingQuestion/RatingQuestion';

interface NextQuestionButtonProps {
  submit: any
}

export const NextQuestionButton = React.memo(
  ({ submit }: NextQuestionButtonProps) => {
    return (
      <Button
        className={s.button}
        kind={ButtonKind.Super}
        size={ButtonSize.Large}
        onClick={submit}
      >
        Дальше
      </Button>
    )
  },
)

NextQuestionButton.displayName = 'NextQuestionButton'
