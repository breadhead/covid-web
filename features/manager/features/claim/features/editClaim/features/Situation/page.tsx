import { createSituationClaim, FooterType } from '@app/features/common/claim'
import ClaimFormLayout from '@app/features/manager/organisms/ClaimFormLayout'
import Head from 'next/head'
import * as React from 'react'
import Footer from './organisms/Footer'
interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <ClaimFormLayout step={2} title="Медицинские данные">
    <Head>
      <title>Медицинские данные | Просто спросить</title>
    </Head>
    {children}
  </ClaimFormLayout>
)

const footer: FooterType = (error, loading, styles, id) => (
  <Footer error={error} loading={loading} styles={styles} id={id} />
)

export default createSituationClaim(Layout as any, footer)
