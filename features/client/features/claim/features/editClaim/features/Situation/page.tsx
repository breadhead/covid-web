import ClaimFormLayout from '@app/features/client/organisms/ClaimFormLayout'
import { createSituationClaim, FooterType } from '@app/features/common/claim'
import { NON_BREAKING_SPACE } from '@app/lib/config'
import Head from 'next/head'
import * as React from 'react'
import Footer from './organisms/Footer'
interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <ClaimFormLayout
    step={2}
    title="Опишите ситуацию"
    info={`Чем полнее вы ответите на вопросы, тем точнее будет ответ эксперта. Если
    вы не${NON_BREAKING_SPACE}знаете точных формулировок, пишите своими
    словами. Сотрудники Фонда свяжутся с${NON_BREAKING_SPACE}вами, если будут
    необходимы дополнительные данные.`}
  >
    <Head>
      <title>Условия консультации | Просто спросить</title>
    </Head>
    {children}
  </ClaimFormLayout>
)

const footer: FooterType = (error, loading, styles) => (
  <Footer error={error} loading={loading} styles={styles} />
)

export default createSituationClaim(Layout as any, footer)
