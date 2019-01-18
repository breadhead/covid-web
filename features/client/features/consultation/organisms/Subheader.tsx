import { connect } from 'react-redux'

import { State } from '@app/lib/store'

import { QuotaClaim } from '@app/models/Claim/QuotaClaim'

import Company from '../molecules/Company'
import Notification, { ClaimStatus } from '../molecules/Notification'
import { getClientStatus } from './selectors'

interface Props {
  quotaClaim: QuotaClaim
  status: string
}

const Subheader = ({ quotaClaim, status }: Props) => (
  <>
    <Company quotaClaim={quotaClaim} />
    <Notification status={status} />
  </>
)

const mapState = (state: State) => ({
  status: getClientStatus(state),
})

export default connect(mapState)(Subheader)
