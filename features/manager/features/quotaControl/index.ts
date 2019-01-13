import { compose } from 'recompose'

import { withBindQuotaModal } from '../bindQuota'
import { withCloseClaimModal } from '../closeClaim'
import Controls from './organisms/Controls'

export default compose(
  withBindQuotaModal,
  withCloseClaimModal,
)(Controls as any)
