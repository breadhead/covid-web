import * as React from 'react'

import ProgressBar from '@app/features/common/progressBar'
import Layout from '../Layout'
import * as styles from './Layout.css'

export interface Props {
  step: number
  title?: string
  info?: React.ReactNode
  children?: React.ReactNode
}

const ClaimFormLayout: React.StatelessComponent<Props> = ({
  step,
  title,
  info,
  children,
}) => {
  return (
    <Layout>
      <main className={styles.claimPage}>
        <ProgressBar step={step} />
        {title && <h1 className={styles.title}>{title}</h1>}
        {info && <p className={styles.infoText}>{info}</p>}
        {children}
      </main>
    </Layout>
  )
}

export default ClaimFormLayout
