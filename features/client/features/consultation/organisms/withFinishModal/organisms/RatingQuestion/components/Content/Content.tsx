import * as React from 'react'
import { isNull } from 'lodash'
import { NextQuestionButton } from '../../../../molecules/NextQuestionButton'
import { RatingQuestionI } from '../../types/RatingQuestionI'
import { RatingQuestionType } from '../../types/RatingQuestionType'
import { QuestionValue } from '../QuestionValue'
import { QuestionComment } from '../QuestionComment'
import { Dispatch, SetStateAction, ReactText } from 'react'
import { ClientStory } from '../ClientStory';

export interface ContentProps {
  questionId: number | null
  currentQuestion: RatingQuestionI | null
  styles: { [key: string]: string }
  error: string
  submitRatingQuestion: () => void
  setAnswer: Dispatch<SetStateAction<ReactText>>
  answer: any
}

export const Content: React.SFC<ContentProps> = ({
  questionId,
  currentQuestion,
  styles,
  error,
  submitRatingQuestion,
  setAnswer,
  answer,
}: ContentProps) => {
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

  return !isNull(questionId) ? (
    <>
      {!!currentQuestion && (
        <>
          <p className={styles.text}>
            {questionId + 1}. {currentQuestion.question}
          </p>
          <p className={styles.hint}>{currentQuestion.hint}</p>
          {renderQuestionByType(currentQuestion.type)}
        </>
      )}
      {!!error && <p>Ошибка: {error}</p>}
      <NextQuestionButton submit={submitRatingQuestion} />
    </>
  ) : (
      <ClientStory />
    )
}
