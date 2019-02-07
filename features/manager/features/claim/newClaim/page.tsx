import createNewClaim, { FooterType } from '@app/features/common/claim/newClaim'
import * as React from 'react'
import ClaimFormLayout from '../../../organisms/ClaimFormLayout'
import Footer from './organisms/Footer'
interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <ClaimFormLayout step={1} title="Короткая заявка">
    {children}
  </ClaimFormLayout>
)

const footer: FooterType = (error, loading, styles, id) => (
  <Footer error={error} loading={loading} styles={styles} id={id} />
)

export default createNewClaim(Layout as any, footer)
