import { RatingQuestionsEnum } from './RatingQuestionsEnum'

export interface RatingQuestionI {
  type: string
  question: RatingQuestionsEnum
  hint: string
}
