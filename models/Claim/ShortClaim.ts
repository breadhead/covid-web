import Gender from '../Gender'
import ClaimTarget from './ClaimTarget'

interface PersonalData {
  name: string
  region: string
  age: number
  gender: Gender
  email?: string
  phone?: string
}

interface CompanyData {
  name: string
  position: string
}

export interface ShortClaim {
  id: string
  personalData: PersonalData
  diagnosis?: string
  theme: string
  company?: CompanyData
  target: ClaimTarget
}
