import * as React from 'react'
import { useState, useMemo, useCallback } from 'react'

import {
  DEFAULT_RATING_VALUE,
  DEFAULT_QUESTION_ID,
  FINAL_QUESTION_ID,
} from './config/defaultValues'
import { RatingQuestionI } from './types/RatingQuestionI'

import * as s from './RatingQuestion.css'
import { isNull } from 'lodash'
import { RatingAnswerI } from './types/RatingAnswerI'
import { Content } from './components/Content'
import { createSubmitData } from './helpers/createSubmitData'
import { Title } from './components/Title'

interface RatingQuestionProps {
  error: string
  submit: (data: RatingAnswerI) => Promise<void>
  claimId: string
  questions: RatingQuestionI[] | []
  phone: string
}

export const RatingQuestion = React.memo(
  ({ submit, error, claimId, questions, phone }: RatingQuestionProps) => {
    const [questionId, setQuestionId] = useState<number | null>(
      DEFAULT_QUESTION_ID,
    )
    const [answer, setAnswer] = useState<number | string>(DEFAULT_RATING_VALUE)
    const [modalType, setModalType] = useState<'questions' | 'story'>(
      'questions',
    )

    const currentQuestion = useMemo(
      () => (!isNull(questionId) ? questions[questionId] : null),
      [questions.length, questionId],
    )

    const resetRating = useCallback(() => setAnswer(DEFAULT_RATING_VALUE), [])

    const submitRatingQuestion = async () => {
      if (isNull(questionId) || !!error || !currentQuestion) {
        return
      }

      const data = createSubmitData(claimId, currentQuestion, answer)

      await submit(data)
        .then(() => {
          const newId = questionId + 1
          if (newId >= questions.length) {
            setQuestionId(FINAL_QUESTION_ID)
            setModalType('story')
            return
          }
          setQuestionId(newId)
          resetRating()
        })
        .catch(e => console.log('error', e))
    }

    return (
      <>
        <Title styles={s} modalType={modalType} />
        {questions.length > 0 ? (
          <Content
            questionId={questionId}
            currentQuestion={currentQuestion}
            styles={s}
            error={error}
            submitRatingQuestion={submitRatingQuestion}
            answer={answer}
            setAnswer={setAnswer}
            modalType={modalType}
            phone={phone}
            claimId={claimId}
          />
        ) : (
          <p>⭐️⭐️⭐️⭐️⭐️</p>
        )}
      </>
    )
  },
)

RatingQuestion.displayName = 'RatingQuestion'
