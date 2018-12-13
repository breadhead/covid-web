import * as React from 'react'

import { FooterType } from '@app/ui/organisms/Footer'

import Layout from '../layout'
import { HeaderType } from '../layout/organisms/Header'

const DoctorPage = () => (
  <Layout headerType={HeaderType.Secondary} footerType={FooterType.Secondary}>
    <div>Консультация в работе у врача</div>
    <h1>Кратко о теме консультации</h1>
  </Layout>
)

export default DoctorPage
