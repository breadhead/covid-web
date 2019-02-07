import createNewClaim, {
  FooterType,
} from '@app/features/common/claim/features/newClaim'
import Head from 'next/head'
import * as React from 'react'
import ClaimFormLayout from '../../../organisms/ClaimFormLayout'
import Footer from './organisms/Footer'
interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <ClaimFormLayout step={1} title="Короткая заявка">
    <Head>
      <title>Короткая заявка | Просто спросить</title>
    </Head>
    {children}
  </ClaimFormLayout>
)

const footer: FooterType = (error, loading, styles, id) => (
  <Footer error={error} loading={loading} styles={styles} id={id} />
)

export default createNewClaim(Layout as any, footer)
