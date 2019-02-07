import ClaimFormLayout from '@app/features/client/organisms/ClaimFormLayout'
import createNewClaim, {
  FooterType,
} from '@app/features/common/claim/features/newClaim'
import { NON_BREAKING_SPACE } from '@app/lib/config'
import * as React from 'react'
import Footer from './organisms/Footer'
interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <ClaimFormLayout
    step={1}
    title="Заполните заявку"
    info={`Личные данные будут использованы только для${NON_BREAKING_SPACE}консультации.`}
  >
    {children}
  </ClaimFormLayout>
)

const footer: FooterType = (error, loading, styles) => (
  <Footer error={error} loading={loading} styles={styles} />
)

export default createNewClaim(Layout as any, footer)
