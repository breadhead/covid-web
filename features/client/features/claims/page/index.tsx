import * as React from 'react'

import ClaimStatus from '@app/models/Claim/ClaimStatus'
import ShortClaim from '@app/models/Claim/ShortClaim'

import Layout from '../../../organisms/Layout'
import Claims from '../organisms/Claims'
import Title from '../organisms/Title'

const claims: ShortClaim[] = [
  {
    id: 'fdfd',
    status: ClaimStatus.Draft,
    newMessage: false,
  },
  {
    id: 'fdfd',
    status: ClaimStatus.Closed,
    newMessage: true,
  },
  {
    id: 'fdfd',
    status: ClaimStatus.QuestionnaireWaiting,
    newMessage: true,
  },
]

const ClaimsPage = () => (
  <Layout>
    <Title />
    <Claims claims={claims} />
  </Layout>
)

export default ClaimsPage
