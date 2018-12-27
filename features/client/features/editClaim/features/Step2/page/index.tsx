import * as React from 'react'

import { NON_BREAKING_SPACE } from '@app/lib/config'

import Layout from '../../../../../organisms/ClaimFormLayout'
import ClaimForm from '../organisms/Form'
import { ClaimData, SituationClaimFields } from '../organisms/Form/types'

export interface Props {
  onFormSubmit: (fields: SituationClaimFields) => Promise<void>
  claimData: ClaimData
}

const Step2Page = ({ onFormSubmit, claimData }: Props) => {
  return (
    <Layout
      step={2}
      title="Опишите ситуацию"
      info={`Чем полнее вы ответите на вопросы, тем точнее будет ответ эксперта. Если
    вы не${NON_BREAKING_SPACE}знаете точных формулировок, пишите своими
    словами. Сотрудники Фонда свяжутся с${NON_BREAKING_SPACE}вами, если будут
    необходимы дополнительные данные.`}
    >
      <ClaimForm claimData={claimData} onFormSubmit={onFormSubmit} />
    </Layout>
  )
}

export default Step2Page
