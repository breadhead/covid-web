import { RatingQuestionsEnum } from './RatingQuestionsEnum'
import { RatingQuestionType } from './RatingQuestionType'

export interface RatingQuestionServerI {
  id: string
  _type: string
  _question: RatingQuestionsEnum
  _hint: string
}

export interface RatingQuestionI {
  id: string
  type: RatingQuestionType
  question: RatingQuestionsEnum
  hint: string
}
