import { Quota } from '@app/models/Quota'
import React from 'react'
import QuotaCard from '../organisms/QuotaCard'

interface PageProps {
  quotas: Quota[]
}

const Page: React.SFC<PageProps> = ({ quotas }) =>
  <main>
    {quotas.map((quota) => <QuotaCard key={quota.name} {...quota}></QuotaCard>)}
  </main>

export default Page
