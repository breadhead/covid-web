import { nextStatus } from '@app/features/common/consultation'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'
import { withBindQuotaModal } from '../bindQuota'
import { withChooseDoctorModal } from '../chooseDoctor'
import { withCloseClaimModal } from '../closeClaim'
import Container from './container'
import Controls from './organisms/Controls'

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  nextStatus: () => dispatch(nextStatus() as any),
})

export default compose(
  withBindQuotaModal,
  withCloseClaimModal,
  withChooseDoctorModal,
  connect(
    null,
    mapDispatch,
  ),
  Container,
)(Controls as any) as any

export { State, reducer } from './reducer'
