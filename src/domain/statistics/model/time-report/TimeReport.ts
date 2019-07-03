import { DoctorTimeReport } from './DoctorTimeReport'

export interface TimeReport {
  average: number
  median: number
  min: number
  max: number
  doctors: DoctorTimeReport[]
}
