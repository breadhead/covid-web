import ClaimFormLayout from '@app/features/client/organisms/ClaimFormLayout'
import { createQuestionsClaim, FooterType } from '@app/features/common/claim'
import { MAX_QUESTIONS_COUNT } from '@app/features/common/form/components/QuestionsValidationTooltip/validateCb'
import Head from 'next/head'
import * as React from 'react'
import Footer from './organisms/Footer'
interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <ClaimFormLayout
    step={3}
    title={`Отметьте не более ${MAX_QUESTIONS_COUNT} вопросов, которые хотите задать эксперту`}
  >
    <Head>
      <title>Задайте вопросы | Просто спросить</title>
    </Head>
    {children}
  </ClaimFormLayout>
)

const footer: FooterType = (error, loading, styles, id) => (
  <Footer error={error} loading={loading} styles={styles} id={id} />
)

export default createQuestionsClaim(Layout as any, footer)
