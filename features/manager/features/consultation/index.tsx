import createConsultationPage from '@app/features/common/consultation'

import Layout from '../../organisms/Layout'

const ClientConsultation = createConsultationPage(
  {
    renderSubHeader: () => <p>...</p>,
    renderFooter: () => <p>...</p>,
  },
  Layout as any,
)

export default ClientConsultation
