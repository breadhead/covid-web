import { Doctor } from '@app/models/Doctor'

export const mapDoctors = (doctors: Doctor[]) =>
  doctors.map((doctor, i) => ({ id: i, value: doctor.fullName }))
