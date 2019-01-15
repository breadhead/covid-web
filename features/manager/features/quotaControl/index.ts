import { nextStatus } from '@app/features/common/consultation'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'
import { withBindQuotaModal } from '../bindQuota'
import { withCloseClaimModal } from '../closeClaim'
import Controls from './organisms/Controls'

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  nextStatus: () => dispatch(nextStatus() as any),
})

export default compose(
  withBindQuotaModal,
  withCloseClaimModal,
  connect(
    null,
    mapDispatch,
  ),
)(Controls as any) as any
