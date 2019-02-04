import { connect } from 'react-redux'

import { State } from '@app/lib/store'

import { getClaim } from '@app/features/common/consultation'
import Claim from '@app/models/Claim/Claim'
import { QuotaClaim } from '@app/models/Claim/QuotaClaim'

import { ListedClaim } from '@app/models/Claim/ListedClaim'
import Company from '../molecules/Company'
import Notification from '../molecules/Notification'
import { getClientInfo } from './selectors'

interface Props {
  quotaClaim: QuotaClaim
  mainInfo: ListedClaim
  claim: Claim
}

const Subheader = ({ quotaClaim, mainInfo, claim }: Props) => {
  return (
    <>
      <Company quotaClaim={quotaClaim} />
      <Notification info={mainInfo} claim={claim} />
    </>
  )
}

const mapState = (state: State) => ({
  mainInfo: getClientInfo(state),
  claim: getClaim(state),
})

export default connect(mapState)(Subheader as any) as any
