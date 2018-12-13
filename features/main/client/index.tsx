import * as React from 'react'

import { FooterType } from '@app/ui/organisms/Footer'

import Layout from '../layout'
import { HeaderType } from '../layout/organisms/Header'

const ClientPage = () => (
  <Layout headerType={HeaderType.Secondary} footerType={FooterType.Secondary}>
    <div>Мои консультации</div>
  </Layout>
)

export default ClientPage
