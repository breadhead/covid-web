import { RatingQuestionType } from './RatingQuestionType'

export interface RatingQuestionServerI {
  id: string
  _type: string
  _order: number
  _question: string
  _hint: string
}

export interface RatingQuestionI {
  id: string
  type: RatingQuestionType
  order: number
  question: string
  hint: string
}
