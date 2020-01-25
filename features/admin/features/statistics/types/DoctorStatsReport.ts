export interface DoctorGraphInfo {
  monthName: number
  average: number
  median: number
  min: number
  max: number
  success: number
  failure: number
  closedByClient: number
  all: number
}
export interface DoctorStatsReport {
  success: number
  failure: number
  closedByClient: number
  all: number
  average: number
  median: number
  min: number
  max: number
  graphInfo: DoctorGraphInfo[]
}
