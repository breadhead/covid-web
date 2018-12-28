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

export interface SituationClaim {
  id: string
  description: string
  diagnosis: string
  stage: string
  otherDisease: string
  relativesDiseases: Array<{
    relative: string
    localization: string
    // tslint:disable-next-line:trailing-comma
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
