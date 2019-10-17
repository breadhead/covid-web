import { RatingQuestionsEnum } from './RatingQuestionsEnum'

export interface RatingQuestionServerI {
  id: string
  _type: string
  _question: RatingQuestionsEnum
  _hint: string
}

export interface RatingQuestionI {
  id: string
  type: string
  question: RatingQuestionsEnum
  hint: string
}
