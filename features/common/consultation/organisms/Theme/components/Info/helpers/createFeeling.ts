import { SituationClaim } from '@app/models/Claim/SituationClaim'

import { InfoBlock } from './types'

const createFelling = ({
  feeling,
  worst,
  complaint,
  nowTreatment,
}: SituationClaim): InfoBlock[] => [
  {
    title: 'Самочувствие',
    articles: [
      {
        subtitle: 'Общее самочувствие',
        text: feeling,
      },
      {
        subtitle: 'Что беспокоит больше всего?',
        text: worst,
      },
      {
        subtitle: 'Жалобы',
        text: complaint,
      },
      {
        subtitle: 'Противоопухолевое лечение в данный момент',
        text: nowTreatment,
      },
    ],
  },
]

export default createFelling
