import * as React from 'react'

import { ListedClaim } from '@app/models/Claim/ListedClaim'

import Layout from '../../../organisms/Layout'
import Claims from '../organisms/Claims'
import Title from '../organisms/Title'

export interface Props {
  claims: ListedClaim[]
}

const ClaimsPage = ({ claims }: Props) => (
  <Layout>
    <Title />
    <Claims claims={claims} />
  </Layout>
)

export default ClaimsPage
