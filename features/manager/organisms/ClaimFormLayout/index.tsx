import * as React from 'react'

import ProgressBar, { ProgressBarKind } from '@app/features/common/progressBar'
import Layout from '../Layout'
import * as styles from './Layout.css'

export interface Props {
  step: number
  title?: string
  children?: React.ReactNode
}
const ClaimFormLayout: React.StatelessComponent<Props> = ({
  title,
  children,
  step,
}) => {
  return (
    <Layout>
      <main className={styles.claimPage}>
        <ProgressBar kind={ProgressBarKind.Manager} step={step} />
        {title && <h1 className={styles.title}>{title}</h1>}
        {children}
      </main>
    </Layout>
  )
}

export default ClaimFormLayout
