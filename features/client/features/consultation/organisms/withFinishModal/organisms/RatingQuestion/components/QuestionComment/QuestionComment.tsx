import * as React from 'react'
import { useCallback } from 'react'
import TextArea from '@app/ui/TextArea'

import * as s from './QuestionComment.css'

export interface QuestionCommentProps {
  setAnswer: (val: string) => void
}

export const QuestionComment: React.SFC<QuestionCommentProps> = ({
  setAnswer,
}: QuestionCommentProps) => {
  const onTextAreaChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setAnswer(JSON.stringify(e.target.value))
    },
    [setAnswer],
  )

  return (
    <TextArea
      className={s.textArea}
      onChange={onTextAreaChange}
      name="rating-question-comment"
    />
  )
}
