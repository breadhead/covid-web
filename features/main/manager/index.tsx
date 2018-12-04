import * as React from 'react'
import Layout from '../layout'

import { FooterType } from '../layout/organisms/Footer'
import { HeaderType } from '../layout/organisms/Header'

const DoctorPage = () =>
  <Layout
    headerType={HeaderType.secondary}
    footerType={FooterType.secondary}>
    <div>Консультация в работе у врача</div>
    <h1>Кратко о теме консультации</h1>
  </Layout>

export default DoctorPage
