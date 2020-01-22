import { DoctorTimeReport } from './DoctorTimeReport'

export interface TimeReport {
  average: number
  median: number
  min: number
  max: number
  success: number
  failure: number
  doctors: DoctorTimeReport[]
  ratingAverage: number
  ratingMedian: number
}
