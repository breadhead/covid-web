import { RatingQuestionI } from '../types/RatingQuestionI'
import { RatingQuestionsEnum } from '../types/RatingQuestionsEnum'
import { RatingQuestionType } from '../types/RatingQuestionType'
import { ReactText } from 'react'

export const createSubmitData = (
  claimId: string,
  currentQuestion: RatingQuestionI,
  answer: ReactText,
) => {
  return {
    claimId,
    question:
      (currentQuestion.id as RatingQuestionsEnum) ||
      (RatingQuestionsEnum.Q1 as RatingQuestionsEnum),
    answerType:
      (currentQuestion.type as RatingQuestionType) ||
      (RatingQuestionType.Value as RatingQuestionType),
    answerValue: `${answer}`,
  }
}
