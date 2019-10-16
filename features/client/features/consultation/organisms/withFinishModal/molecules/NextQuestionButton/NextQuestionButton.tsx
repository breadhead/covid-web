import * as React from 'react'
import { useCallback } from 'react'
import { Button, ButtonKind, ButtonSize } from '@app/src/ui/button'
import * as s from './NextQuestionButton.css'
import { DEFAULT_QUESTION_ID } from '../../organisms/FinishQuestion/FinishQuestion'

interface NextQuestionButtonProps {
  onClick: (id: number) => void
  resetRating: () => void
  questionId: number
  lastQuestionId: number
}

export const NextQuestionButton = React.memo(
  ({
    onClick,
    resetRating,
    questionId,
    lastQuestionId,
  }: NextQuestionButtonProps) => {
    const updateQuestionId = useCallback(
      () => {
        resetRating()
        const newId = questionId + 1

        if (newId > lastQuestionId) {
          onClick(DEFAULT_QUESTION_ID)
          return
        }
        onClick(newId)
      },
      [onClick, questionId],
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
