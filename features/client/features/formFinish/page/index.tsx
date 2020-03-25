import * as React from 'react'
import * as styles from './FormFinish.css'

import { FooterTheme } from '@app/ui/organisms/Footer'
import ClientLayout from '../../../organisms/Layout'
import { QuotaAllocated } from '../components/QuotaAllocated'
import { WaitPlease } from '../components/WaitPlease'

export interface Props {
  email: string
  waiting: boolean
  number: number
}

const FormFinish = ({ email, waiting, number }: Props) => (
  <ClientLayout
    headerClassName={styles.mainHeader}
    pageClassName={styles.formFinish}
    footerTheme={FooterTheme.White}
  >
    <div className={styles.logo}>
      <img className={styles.image} src="/static/images/2-step.png" />
    </div>
    {waiting ? (
      <WaitPlease styles={styles} email={email} number={number} />
    ) : (
      <QuotaAllocated styles={styles} email={email} number={number} />
    )}
  </ClientLayout>
)

export default FormFinish
