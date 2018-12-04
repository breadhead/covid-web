import * as React from 'react'
import Layout from '../layout'

import { FooterType } from '../layout/organisms/Footer'
import { HeaderType } from '../layout/organisms/Header'

const ClientPage = () =>
  <Layout
    headerType={HeaderType.secondary}
    footerType={FooterType.secondary}>
    <div>Мои консультации</div>
  </Layout>

export default ClientPage
