import * as React from 'react'
import { useState, useMemo, useCallback } from 'react'

import { NextQuestionButton } from '../../molecules/NextQuestionButton'
import {
  DEFAULT_RATING_VALUE,
  DEFAULT_QUESTION_ID,
} from './config/defaultValues'
import { RatingAnswerI } from './RatingAnswerI'
import { RatingQuestionI } from './RatingQuestionI'
import { RatingQuestionsEnum } from './RatingQuestionsEnum'
import { QuestionValue } from './components/QuestionValue'
import { RatingQuestionType } from './RatingQuestionType'

interface RatingQuestionProps {
  error: string
  submit: (data: RatingAnswerI) => Promise<void>
  claimId: string
  questions: RatingQuestionI[] | []
}

export const RatingQuestion = React.memo(
  ({ submit, error, claimId, questions }: RatingQuestionProps) => {
    const [questionId, setQuestionId] = useState<number>(DEFAULT_QUESTION_ID)
    const [rating, setRating] = useState<number>(DEFAULT_RATING_VALUE)

    const currentQuestion = useMemo(() => questions[questionId], [
      questions,
      questionId,
    ])

    const resetRating = useCallback(() => setRating(DEFAULT_RATING_VALUE), [])

    const submitRatingQuestion = async () => {
      const data = {
        claimId,
        question: currentQuestion.id as RatingQuestionsEnum,
        answer: `${rating}`,
      }

      await submit(data)
        .then(() => {
          const newId = questionId + 1
          if (newId >= questions.length) {
            //TODO: add new q

            setQuestionId(DEFAULT_QUESTION_ID)
            return
          }
          setQuestionId(newId)
          resetRating()
        })
        .catch(e => console.log('error', e))
    }

    const renderQuestionByType = (type: RatingQuestionType) => {
      switch (type) {
        case RatingQuestionType.Value:
          return (
            <QuestionValue
              questionNum={questionId + 1}
              currentQuestion={currentQuestion}
              setRating={setRating}
              rating={rating}
            />
          )
        case RatingQuestionType.Comment:
          return <div>mememmem</div>
        default:
          return null
      }
    }

    return questions.length > 0 ? (
      <>
        {renderQuestionByType(currentQuestion.type)}
        {!!error && <p>Ошибка: {error}</p>}
        <NextQuestionButton submit={submitRatingQuestion} />
      </>
    ) : (
      <p>⭐️⭐️⭐️⭐️⭐️</p>
    )
  },
)

RatingQuestion.displayName = 'FinishQuestion'
