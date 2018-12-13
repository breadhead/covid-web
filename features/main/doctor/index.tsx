import * as React from 'react'
import Layout from '../layout'

import { FooterType } from '../layout/organisms/Footer'
import { HeaderType } from '../layout/organisms/Header'

const ClientPage = () => (
  <Layout headerType={HeaderType.Secondary} footerType={FooterType.Secondary}>
    <div>Мои консультации</div>
  </Layout>
)

export default ClientPage
