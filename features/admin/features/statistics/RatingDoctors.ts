import { RatingValueQuestion } from './RatingValueQuestion'

export interface RatingDoctorsType {
  doctor: string
  average: number
  value: RatingValueQuestion[]
  comment: {
    question: string
    order: number
    answers: string
  }
}
