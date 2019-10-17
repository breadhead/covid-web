import { RatingQuestionsEnum } from './RatingQuestionsEnum'

export interface RatingAnswerI {
  claimId: string
  question: RatingQuestionsEnum
  answer: string
}
