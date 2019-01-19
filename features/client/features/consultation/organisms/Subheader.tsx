import { connect } from 'react-redux'

import { State } from '@app/lib/store'

import { QuotaClaim } from '@app/models/Claim/QuotaClaim'

import { ListedClaim } from '@app/models/Claim/ListedClaim'
import Company from '../molecules/Company'
import Notification from '../molecules/Notification'
import { getClientInfo } from './selectors'

interface Props {
  quotaClaim: QuotaClaim
  mainInfo: ListedClaim
}

const Subheader = ({ quotaClaim, mainInfo }: Props) => (
  <>
    <Company quotaClaim={quotaClaim} />
    <Notification info={mainInfo} />
  </>
)

const mapState = (state: State) => ({
  mainInfo: getClientInfo(state),
})

export default connect(mapState)(Subheader as any)
