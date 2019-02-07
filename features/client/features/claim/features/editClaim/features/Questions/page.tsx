import ClaimFormLayout from '@app/features/client/organisms/ClaimFormLayout'
import { createQuestionsClaim, FooterType } from '@app/features/common/claim'
import Head from 'next/head'
import * as React from 'react'
import Footer from './organisms/Footer'
interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <ClaimFormLayout
    step={3}
    title="Отметьте вопросы, которые хотите задать эксперту"
  >
    <Head>
      <title>Задайте вопросы | Просто спросить</title>
    </Head>
    {children}
  </ClaimFormLayout>
)

const footer: FooterType = (error, loading, styles) => (
  <Footer error={error} loading={loading} styles={styles} />
)

export default createQuestionsClaim(Layout as any, footer)
