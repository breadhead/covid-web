import * as React from 'react'
import { useCallback } from 'react'
import { Button, ButtonKind, ButtonSize } from '@app/src/ui/button'
import * as s from './NextQuestionButton.css'
// import { DEFAULT_QUESTION_ID } from '../../organisms/RatingQuestion/RatingQuestion';

interface NextQuestionButtonProps {
  setQuestionId: (id: number) => void
  resetRating: () => void
  questionId: number
  lastQuestionId: number
  submit: () => void
  error: string
}

export const NextQuestionButton = React.memo(
  ({ setQuestionId, questionId, submit }: NextQuestionButtonProps) => {
    const updateQuestionId = useCallback(
      () => {
        submit()
      },
      [setQuestionId, questionId],
    )
    return (
      <Button
        className={s.button}
        kind={ButtonKind.Super}
        size={ButtonSize.Large}
        onClick={updateQuestionId}
      >
        Дальше
      </Button>
    )
  },
)

NextQuestionButton.displayName = 'NextQuestionButton'
