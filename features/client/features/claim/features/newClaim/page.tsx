import Footer from '@app/features/client/features/claim/features/editClaim/features/Situation/organisms/Footer'
import ClaimFormLayout from '@app/features/client/organisms/ClaimFormLayout'
import createNewClaim, {
  FooterType,
} from '@app/features/common/claim/features/newClaim'
import { NON_BREAKING_SPACE } from '@app/lib/config'
import * as React from 'react'
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

const footer: FooterType = (
  error,
  loading,
  styles,
  id,
  showDraftNotification,
) => (
  <Footer
    error={error}
    loading={loading}
    styles={styles}
    id={id}
    showDraftNotification={showDraftNotification}
  />
)

export default createNewClaim(Layout as any, footer)
