import { Doctor } from '@app/models/Users/Doctor'
import AssignDoctorButton from '../../atoms/AssignDoctorButton'
import * as styles from './Corporate.css'

interface Props {
  openChooseDoctor: () => void
  assignedDoctor?: Doctor
}

const Corporate = ({ openChooseDoctor, assignedDoctor }: Props) => (
  <div className={styles.corporate}>
    <AssignDoctorButton
      openChooseDoctor={openChooseDoctor}
      assignedDoctor={assignedDoctor}
    />
  </div>
)
export default Corporate
