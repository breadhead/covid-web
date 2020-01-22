import { RatingValueQuestion } from './RatingValueQuestion'

export interface RatingDoctorsType {
  doctor: string
  average: number
  median: number
  value: RatingValueQuestion[]
  comment: string[]
}
