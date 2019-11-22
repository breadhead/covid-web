import { RatingQuestionI } from '../types/RatingQuestionI'
import { ReactText } from 'react'

export const createSubmitData = (
  claimId: string,
  currentQuestion: RatingQuestionI,
  answer: ReactText,
) => {
  return {
    claimId,
    question: currentQuestion.id || '',
    answerType: currentQuestion.type || '',
    answerValue: `${answer}`,
  }
}
