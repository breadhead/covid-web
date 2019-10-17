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
import { RatingAnswerI } from './RatingAnswerI'

interface RatingQuestionProps {
  error: string
  submit: (data: RatingAnswerI) => Promise<void>
  claimId: string
}

export const RatingQuestion = React.memo(
  ({ submit, error, claimId }: RatingQuestionProps) => {
    const [questionId, setQuestionId] = useState<number>(DEFAULT_QUESTION_ID)
    const [rating, setRating] = useState<number>(DEFAULT_RATING_VALUE)

    const currentQuestion = useMemo(() => keyBy(questions, 'id')[questionId], [
      questionId,
    ])

    const resetRating = useCallback(() => setRating(DEFAULT_RATING_VALUE), [])

    const submitRatingQuestion = async () => {
      const data = {
        claimId,
        question: currentQuestion.code,
        answer: `${rating}`,
      }

      await submit(data).then(() => {
        const newId = questionId + 1
        if (newId > questions.length) {
          setQuestionId(DEFAULT_QUESTION_ID)
          return
        }
        setQuestionId(newId)
        resetRating()
      })
    }

    return (
      <>
        <p className={s.text}>
          {currentQuestion.id}. {currentQuestion.text}
        </p>
        <p className={s.hint}>{currentQuestion.hint}</p>
        <div className={s.buttonsContainer}>
          {buttons.map(btn => (
            <RatingButton key={btn.id} button={btn} setRating={setRating} />
          ))}
        </div>
        <p className={s.rating}>{!!rating ? rating : ''}</p>
        {!!error && <p>Ошибка: {error}</p>}
        <NextQuestionButton submit={submitRatingQuestion} />
      </>
    )
  },
)

RatingQuestion.displayName = 'FinishQuestion'
