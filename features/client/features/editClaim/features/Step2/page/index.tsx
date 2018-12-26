import * as React from 'react'

import { NON_BREAKING_SPACE } from '@app/lib/config'

import Layout from '../../../../../organisms/ClaimFormLayout'
import ClaimForm from '../organisms/Form'

export interface Props {
  onFormSubmit: (id: string) => void
}

const Step2Page = ({ onFormSubmit }: Props) => {
  return (
    <Layout
      step={2}
      title="Опишите ситуацию"
      info={`Чем полнее вы ответите на вопросы, тем точнее будет ответ эксперта. Если
    вы не${NON_BREAKING_SPACE}знаете точных формулировок, пишите своими
    словами. Сотрудники Фонда свяжутся с${NON_BREAKING_SPACE}вами, если будут
    необходимы дополнительные данные.`}
    >
      <ClaimForm />
    </Layout>
  )
}

Step2Page.getInitialProps = async context => {
  const { id } = context.query
  try {
    // const apiClient = ApiClientFactory.getApiClient()
    // const result = await apiClient.shortClaim(id)
  } catch (error) {
    debugger
  }
  return { stars: 2 }
}

export default Step2Page
