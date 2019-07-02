import { DoctorTimeReport } from './DoctorTimeReport'

export interface TimeReport {
  average: number
  median: number
  doctors: DoctorTimeReport[]
}
