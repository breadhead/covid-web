import Select from '@app/ui/atoms/Select'

import { Doctor } from '@app/models/Users/Doctor'
import AssignDoctorButton from '../../atoms/AssignDoctorButton'
import * as styles from './Corporate.css'

const options = [
  {
    key: '1',
    label: 'Проверка корпоративности',
  },
]

interface Props {
  openChooseDoctor: () => void
  assignedDoctor?: Doctor
}

const Corporate = ({ openChooseDoctor, assignedDoctor }: Props) => (
  <div className={styles.corporate}>
    <Select name="fdf" options={options} defaultValue={'1'} />
    <AssignDoctorButton
      openChooseDoctor={openChooseDoctor}
      assignedDoctor={assignedDoctor}
    />
  </div>
)
export default Corporate
