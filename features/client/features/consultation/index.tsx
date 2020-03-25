/* eslint-disable react/display-name */
import React from 'react'
import createConsultationPage from '@app/features/common/consultation'

import ClientLayout from '../../organisms/Layout'
import Subheader from './organisms/Subheader'

const ClientConsultation = createConsultationPage(
  {
    renderSubHeader: ({ quota }: any) => <Subheader quotaClaim={quota} />,
  },
  ClientLayout as any,
)

export default ClientConsultation

export { reducer, State } from '@app/features/common/consultation'

export {
  default as FinishModal,
  FINISH_MODAL_KEY,
} from './organisms/withFinishModal'
