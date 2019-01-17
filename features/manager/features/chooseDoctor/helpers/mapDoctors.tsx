import { Doctor } from '@app/models/Doctor'
import * as React from 'react'
import RadioContent from '../molecules/RadioContent'

export const mapDoctors = (doctors: Doctor[]) =>
  doctors.map((doctor, i) => ({
    id: i,
    value: doctor.doctorLogin,
    component: (
      <RadioContent title={doctor.fullName} subtitle={doctor.description} />
    ),
  }))
