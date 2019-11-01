import * as React from 'react'
import { useState, useMemo, useCallback } from 'react'

import {
  DEFAULT_RATING_VALUE,
  DEFAULT_QUESTION_ID,
  FINAL_QUESTION_ID,
} from './config/defaultValues'
import { RatingQuestionI } from './types/RatingQuestionI'
import { QuestionValue } from './components/QuestionValue'

import * as s from './RatingQuestion.css'
import { QuestionComment } from './components/QuestionComment'
import { isNull } from 'lodash'
import { RatingAnswerI } from './types/RatingAnswerI';
import { RatingQuestionsEnum } from './types/RatingQuestionsEnum';
import { RatingQuestionType } from './types/RatingQuestionType';
import { Content } from './components/Content';

interface RatingQuestionProps {
  error: string
  submit: (data: RatingAnswerI) => Promise<void>
  claimId: string
  questions: RatingQuestionI[] | []
}

export const RatingQuestion = React.memo(
  ({ submit, error, claimId, questions }: RatingQuestionProps) => {
    const [questionId, setQuestionId] = useState<number | null>(
      DEFAULT_QUESTION_ID,
    )
    const [answer, setAnswer] = useState<number | string>(DEFAULT_RATING_VALUE)

    const currentQuestion = useMemo(
      () => (!isNull(questionId) ? questions[questionId] : null),
      [questions.length, questionId],
    )

    const resetRating = useCallback(() => setAnswer(DEFAULT_RATING_VALUE), [])

    const submitRatingQuestion = async () => {
      if (isNull(questionId) || !!error) {
        return
      }

      const data = {
        claimId,
        question:
          (!!currentQuestion && (currentQuestion.id as RatingQuestionsEnum)) ||
          (RatingQuestionsEnum.Q1 as RatingQuestionsEnum),
        answerType:
          (!!currentQuestion && (currentQuestion.type as RatingQuestionType)) ||
          (RatingQuestionType.Value as RatingQuestionType),
        answerValue: `${answer}`,
      }

      await submit(data)
        .then(() => {
          const newId = questionId + 1
          if (newId >= questions.length) {
            setQuestionId(FINAL_QUESTION_ID)
            return
          }
          setQuestionId(newId)
          resetRating()
        })
        .catch(e => console.log('error', e))
    }


    return questions.length > 0 ? (
      <Content
        questionId={questionId}
        currentQuestion={currentQuestion}
        styles={s}
        error={error}
        submitRatingQuestion={submitRatingQuestion}
        answer={answer}
        setAnswer={setAnswer}
      />
    ) : (
        <p>⭐️⭐️⭐️⭐️⭐️</p>
      )
  },
)

RatingQuestion.displayName = 'RatingQuestion'
