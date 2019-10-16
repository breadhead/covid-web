import * as React from 'react'
import { useState, useMemo, useCallback } from 'react'
import { buttons } from './config/buttons'

import * as s from './RatingQuestion.css'
import { questions } from './config/questions'
import { keyBy } from 'lodash'
import { RatingButton } from '../../molecules/RatingButton'
import { NextQuestionButton } from '../../molecules/NextQuestionButton'
import {
  DEFAULT_RATING_VALUE,
  DEFAULT_QUESTION_ID,
} from './config/defaultValues'

interface RatingQuestionProps {
  error: string
  submit: (id: number, text: string) => Promise<void>
}

export const RatingQuestion = React.memo(
  ({ submit, error }: RatingQuestionProps) => {
    const [questionId, setQuestionId] = useState<number>(DEFAULT_QUESTION_ID)
    const [rating, setRating] = useState<number>(DEFAULT_RATING_VALUE)

    const currentQuestion = useMemo(() => keyBy(questions, 'id')[questionId], [
      questionId,
    ])

    const resetRating = useCallback(() => setRating(DEFAULT_RATING_VALUE), [
      setRating,
    ])

    const submitRatingQuestion = useCallback(
      () => {
        submit(questionId, currentQuestion.text).then(() => {
          resetRating()
          const newId = questionId + 1

          if (newId > questions.length) {
            setQuestionId(DEFAULT_QUESTION_ID)
            return
          }
          setQuestionId(newId)
        })
      },
      [questionId, currentQuestion.text],
    )

    return (
      <>
        <p className={s.text}>
          {currentQuestion.id}. {currentQuestion.text}
        </p>
        <p className={s.hint}>{currentQuestion.hint}</p>
        <div className={s.buttonsContainer}>
          {buttons.map(btn => (
            <RatingButton key={btn.id} button={btn} onClick={setRating} />
          ))}
        </div>
        <p className={s.rating}>{!!rating ? rating : ''}</p>
        {!!error && <p>Ошибка: {error}</p>}
        <NextQuestionButton
          questionId={questionId}
          setQuestionId={setQuestionId}
          resetRating={resetRating}
          lastQuestionId={questions.length}
          submit={submitRatingQuestion}
          error={error}
        />
      </>
    )
  },
)

RatingQuestion.displayName = 'FinishQuestion'
