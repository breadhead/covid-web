import * as React from 'react'
import * as styles from './FormFinish.css'

import { FooterTheme } from '@app/ui/organisms/Footer'
import Layout from '../../../organisms/Layout'
import { QuotaAllocated } from '../components/QuotaAllocated'
import { WaitPlease } from '../components/WaitPlease'

export interface Props {
  email: string
  waiting: boolean
}

const FormFinish = ({ email, waiting }: Props) => (
  <Layout
    headerClassName={styles.mainHeader}
    pageClassName={styles.formFinish}
    footerTheme={FooterTheme.White}
  >
    <div className={styles.logo}>
      <img className={styles.image} src="/static/images/2-step.png" />
    </div>
    {waiting ? (
      <WaitPlease styles={styles} email={email} />
    ) : (
      <QuotaAllocated styles={styles} email={email} />
    )}
  </Layout>
)

export default FormFinish
