export interface CreateDoctorRequest {
  name: string
  email: string
  rawPassword: string
  telegramId?: string
  boardUsername?: string
  description?: string
}
