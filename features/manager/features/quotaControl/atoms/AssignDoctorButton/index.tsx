import { Doctor } from '@app/models/Users/Doctor'
import Button from '@app/ui/Button'
import ButtonWithArrow from '@app/ui/ButtonWithArrow'
import * as React from 'react'
import * as styles from './button.css'

export interface Props {
  assignedDoctor?: Doctor
  openChooseDoctor: () => void
}

const AssignDoctorButton = ({ assignedDoctor, openChooseDoctor }: Props) => {
  return assignedDoctor ? (
    <ButtonWithArrow className={styles.button} onClick={openChooseDoctor}>
      {assignedDoctor.fullName}
    </ButtonWithArrow>
  ) : (
    <Button onClick={openChooseDoctor}>Выбрать доктора</Button>
  )
}

export default AssignDoctorButton
