import React from 'react'
import Quota from '../organisms/QuotaCard'

const Page = ({ quotas }) =>
  <div>
    {quotas.map((quota) => <Quota key={quota.name} {...quota}></Quota>)}
  </div>

export default Page
