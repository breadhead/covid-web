import * as React from 'react'
import { useState, useMemo, useCallback } from 'react'

import { NextQuestionButton } from '../../molecules/NextQuestionButton'
import {
  DEFAULT_RATING_VALUE,
  DEFAULT_QUESTION_ID,
  FINAL_QUESTION_ID,
} from './config/defaultValues'
import { RatingAnswerI } from './RatingAnswerI'
import { RatingQuestionI } from './RatingQuestionI'
import { RatingQuestionsEnum } from './RatingQuestionsEnum'
import { QuestionValue } from './components/QuestionValue'
import { RatingQuestionType } from './RatingQuestionType'

import * as s from './RatingQuestion.css'
import { QuestionComment } from './components/QuestionComment'
import { isNull } from 'lodash'

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
      if (isNull(questionId)) {
        return
      }

      const data = {
        claimId,
        question:
          (!!currentQuestion && (currentQuestion.id as RatingQuestionsEnum)) ||
          (RatingQuestionsEnum.Q1 as RatingQuestionsEnum),
        answer: `${answer}`,
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

    const renderQuestionByType = (type: RatingQuestionType) => {
      switch (type) {
        case RatingQuestionType.Value:
          return <QuestionValue setRating={setAnswer} answer={answer} />
        case RatingQuestionType.Comment:
          return <QuestionComment setAnswer={setAnswer} />
        default:
          return null
      }
    }

    return questions.length > 0 ? (
      !isNull(questionId) ? (
        <>
          {!!currentQuestion && (
            <>
              <p className={s.text}>
                {questionId + 1}. {currentQuestion.question}
              </p>
              <p className={s.hint}>{currentQuestion.hint}</p>
              {renderQuestionByType(currentQuestion.type)}
            </>
          )}
          {!!error && <p>Ошибка: {error}</p>}
          <NextQuestionButton submit={submitRatingQuestion} />
        </>
      ) : (
        <p className={s.finalText}>Спасибо за ваш ответ!</p>
      )
    ) : (
      <p>⭐️⭐️⭐️⭐️⭐️</p>
    )
  },
)

RatingQuestion.displayName = 'RatingQuestion'
