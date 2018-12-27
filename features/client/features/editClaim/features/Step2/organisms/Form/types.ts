import { ShortClaim } from '@app/models/Claim/ShortClaim'

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

export interface SituationClaimFields {
  description: string
  diagnosis: string
  stage: string
  otherDisease: string
  relativesDiseases: Array<{
    relative: string
    localization: string
    diagnosisAge: string
  }>
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
}

export type ClaimData = Pick<ShortClaim, 'diagnosis' | 'theme'>
