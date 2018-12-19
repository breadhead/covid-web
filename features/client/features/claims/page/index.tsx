import * as React from 'react'

import { ShortClaim } from '@app/models/Claim/ShortClaim'

import Layout from '../../../organisms/Layout'
import Claims from '../organisms/Claims'
import Title from '../organisms/Title'

export interface Props {
  claims: ShortClaim[]
}

const ClaimsPage = ({ claims }: Props) => (
  <Layout>
    <Title />
    <Claims claims={claims} />
  </Layout>
)

export default ClaimsPage
