import * as React from 'react'

import { FooterType } from '@app/ui/organisms/Footer'

import Layout from '../layout'

const ClientPage = () => (
  <Layout footerType={FooterType.Secondary}>
    <div>Мои консультации</div>
  </Layout>
)

export default ClientPage
