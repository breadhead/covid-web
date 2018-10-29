import Uploading from '@app/features/uploading/Uploading'
import { Quota } from '@app/models/Quota'
import React from 'react'
import Header from '../organisms/Header'
import QuotasList from '../organisms/QuotasList'

interface PageProps {
  quotas: Quota[]
}

const Page: React.SFC<PageProps> = ({ quotas }) =>
  <main>
    <Header />
    <QuotasList quotas={quotas} />
  </main>

export default Page
