import createConsultationPage from '@app/features/common/consultation'

import Layout from '../../organisms/Layout'
import Control from '../quotaControl'

const ClientConsultation = createConsultationPage(
  {
    renderSubHeader: () => <Control />,
    renderFooter: () => <Control />,
  },
  Layout as any,
)

export default ClientConsultation
