import * as React from 'react'

import ClaimPage from './page'

import { NON_BREAKING_SPACE } from '@app/lib/config'

const Claim = () => {
  return <ClaimPage
  title="Заполните заявку"
  text={`Личные данные будут использованы только для${NON_BREAKING_SPACE}консультации.`}
  />
}

export default Claim
