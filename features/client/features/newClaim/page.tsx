import createNewClaim from '@app/features/common/claim/newClaim'
import { NON_BREAKING_SPACE } from '@app/lib/config'
import * as React from 'react'
import ClaimFormLayout from '../../organisms/ClaimFormLayout'
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
export default createNewClaim(Layout as any)
