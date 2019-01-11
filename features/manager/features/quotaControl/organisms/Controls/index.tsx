import { WithQuotaTypeModal } from '../../../bindQuota'
import Buttons from '../../molecules/Buttons'
import Corporate from '../../molecules/Corporate'

import * as styles from './Controls.css'

type Props = WithQuotaTypeModal

const Controls = ({ openBindQuota }: Props) => (
  <div className={styles.plate}>
    <Buttons openBindQuota={openBindQuota} />
    <Corporate />
  </div>
)

export default Controls
