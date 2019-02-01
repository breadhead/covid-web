import { Doctor } from '@app/models/Users/Doctor'
import AssignDoctorButton from '../../atoms/AssignDoctorButton'
import { showButtonWithDoctorsName } from '../../helpers/showButtonWithDoctorsName'
import * as styles from './BottomRow.css'

interface Props {
  openChooseDoctor: () => void
  assignedDoctor?: Doctor
}

const BottomRow = ({ openChooseDoctor, assignedDoctor }: Props) => (
  <div className={styles.corporate}>
    {showButtonWithDoctorsName(!!assignedDoctor) && (
      <AssignDoctorButton
        openChooseDoctor={openChooseDoctor}
        assignedDoctor={assignedDoctor}
      />
    )}
  </div>
)
export default BottomRow
