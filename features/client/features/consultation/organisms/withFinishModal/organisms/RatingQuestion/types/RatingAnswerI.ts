import { RatingQuestionType } from './RatingQuestionType'

export interface RatingAnswerI {
  claimId: string
  question: string
  answerType: RatingQuestionType
  answerValue: string
}
