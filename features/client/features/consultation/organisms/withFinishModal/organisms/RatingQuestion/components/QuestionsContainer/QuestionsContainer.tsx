import * as React from 'react';
import { RatingQuestionI } from '../../types/RatingQuestionI';
import { Dispatch, SetStateAction, ReactText } from 'react';
import { isNull } from 'lodash';
import { RatingQuestionType } from '../../types/RatingQuestionType';
import { QuestionValue } from '../QuestionValue';
import { QuestionComment } from '../QuestionComment';
import { NextQuestionButton } from '../../../../molecules/NextQuestionButton';

export interface QuestionsContainerProps {
  questionId: number | null
  currentQuestion: RatingQuestionI | null
  styles: { [key: string]: string }
  error: string
  submitRatingQuestion: () => void
  setAnswer: Dispatch<SetStateAction<ReactText>>
  answer: any
}

export const QuestionsContainer: React.SFC<QuestionsContainerProps> = (
  { questionId,
    currentQuestion,
    styles,
    error,
    submitRatingQuestion,
    setAnswer,
    answer, }
) => {


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
    </>) : null
}
