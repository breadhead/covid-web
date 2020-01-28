import { RatingValueQuestion } from './RatingValueQuestion'
import { RatingCommentQuestion } from './RatingCommentQuestion'

export interface RatingDoctorsType {
  doctor: string
  average: number
  median: number
  value: RatingValueQuestion[]
  comment: RatingCommentQuestion[]
}
