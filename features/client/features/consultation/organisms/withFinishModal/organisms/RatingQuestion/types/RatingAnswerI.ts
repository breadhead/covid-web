import { RatingQuestionsEnum } from './RatingQuestionsEnum'
import { RatingQuestionType } from './RatingQuestionType'

export interface RatingAnswerI {
  claimId: string
  question: RatingQuestionsEnum
  answerType: RatingQuestionType
  answerValue: string
}
