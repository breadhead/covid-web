import { ShortClaim } from '@app/models/Claim/ShortClaim'
import { Aids } from '@app/models/Aids'

interface FileData {
  title: string
  url: string
}

interface Date {
  month: string
  year: string
}

interface Treatment {
  region: string
  when: Date
  clinic: string
  doctor: string
}

interface RelativesDisease {
  relative: string
  localization: string
  diagnosisAge: string
}

export interface SituationClaimFields {
  relativesDiseasesPresence: boolean
  surgicalTreatmentsPresence: boolean
  medicalsTreatmentsPresence: boolean
  radiationTreatmentsPresence: boolean
  description: string
  diagnosis: string
  stage: string
  otherDisease: string
  relativesDiseases: RelativesDisease[]
  feeling: string
  worst: string
  complaint: string
  nowTreatment: string
  surgicalTreatments: Array<Treatment & { surgery: string }>
  medicalsTreatments: Array<
    Treatment & { end: Date; schema: string; cyclesCount: string }
  >
  radiationTreatments: Array<
    Treatment & { end: Date; schema: string; cyclesCount: string }
  >
  histology: FileData
  discharge: FileData
  otherFiles: FileData[]
  diagnosisDate: Date
  aids: Aids
}

export type ClaimData = Pick<ShortClaim, 'localization' | 'theme' | 'id'>
