import * as React from 'react'

import { NON_BREAKING_SPACE } from '@app/lib/config'

import { ShortClaim } from '@app/models/Claim/ShortClaim'
import Layout from '../../../../../organisms/ClaimFormLayout'
import ClaimForm from '../organisms/Form'

export interface Props {
  onFormSubmit: (id: string) => void
  shortClaim: ShortClaim
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

export default Step2Page
