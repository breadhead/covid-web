import { Doctor } from '@app/models/Users/Doctor'
import AssignDoctorButton from '../../atoms/AssignDoctorButton'
import ChangeQuotaButton from '../../atoms/ChangeQuotaButton'
import { CorporateButton } from '../../atoms/corporate-button'
import { showButtonWithDoctorsName } from '../../helpers/showButtonWithDoctorsName'
import * as styles from './BottomRow.css'

interface Props {
  openChooseDoctor: () => void
  openBindQuota: () => void
  assignedDoctor?: Doctor
  quotaName?: string
  corporate: boolean
}

const BottomRow = ({
  openChooseDoctor,
  assignedDoctor,
  quotaName,
  openBindQuota,
  corporate,
}: Props) => (
  <div className={styles.corporate}>
    {showButtonWithDoctorsName(!!assignedDoctor) && (
      <AssignDoctorButton
        openChooseDoctor={openChooseDoctor}
        assignedDoctor={assignedDoctor}
      />
    )}
    {corporate && <CorporateButton />}
    {quotaName && (
      <ChangeQuotaButton openBindQuota={openBindQuota} quotaName={quotaName} />
    )}
  </div>
)
export default BottomRow
