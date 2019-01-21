import { Doctor } from '@app/models/Users/Doctor'
import Button from '@app/ui/atoms/Button'
import ButtonWithArrow from '@app/ui/atoms/ButtonWithArrow'
import * as React from 'react'

export interface Props {
  assignedDoctor?: Doctor
  openChooseDoctor: () => void
}

const AssignDoctorButton = ({ assignedDoctor, openChooseDoctor }: Props) => {
  return assignedDoctor ? (
    <ButtonWithArrow onClick={openChooseDoctor}>
      {assignedDoctor.fullName}
    </ButtonWithArrow>
  ) : (
    <Button onClick={openChooseDoctor}>Выбрать доктора</Button>
  )
}

export default AssignDoctorButton
