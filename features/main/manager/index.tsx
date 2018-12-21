import * as React from 'react'

import { FooterType } from '@app/ui/organisms/Footer'

import Layout from '../layout'

const DoctorPage = () => (
  <Layout footerType={FooterType.Secondary}>
    <div>Консультация в работе у врача</div>
    <h1>Кратко о теме консультации</h1>
  </Layout>
)

export default DoctorPage
