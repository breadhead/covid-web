import { createQuestionsClaim, FooterType } from '@app/features/common/claim'
import ClaimFormLayout from '@app/features/manager/organisms/ClaimFormLayout'
import Head from 'next/head'
import * as React from 'react'
import Footer from './organisms/Footer'
interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <ClaimFormLayout step={3} title="Вопросы к эксперту">
    <Head>
      <title>Вопросы к эксперту | Просто спросить</title>
    </Head>
    {children}
  </ClaimFormLayout>
)

const footer: FooterType = (error, loading, styles, id) => (
  <Footer error={error} loading={loading} styles={styles} id={id} />
)

export default createQuestionsClaim(Layout as any, footer)
