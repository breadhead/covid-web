import * as React from 'react'

import { FooterType } from '@app/ui/organisms/Footer'

import Layout from '../layout'

const DoctorPage = () => (
  <Layout footerType={FooterType.Secondary}>
    <h1>Привет! Вы успешно авторизованы</h1>
  </Layout>
)

export default DoctorPage
