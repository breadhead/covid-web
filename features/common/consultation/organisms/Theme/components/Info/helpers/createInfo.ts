import { SituationClaim } from '@app/models/Claim/SituationClaim'

import { InfoBlock } from './types'

const createInfo = ({
  description,
  diagnosis,
  stage,
  otherDisease,
}: SituationClaim): InfoBlock[] => [
  {
    title: 'Общая информация',
    articles: [
      {
        subtitle: 'Краткое описание ситуации',
        text: description,
      },
      {
        subtitle: 'Диагноз',
        text: diagnosis,
      },
      {
        subtitle: 'Стадия',
        text: stage,
      },
      {
        subtitle:
          'Другие заболевания, о которых, как вы считаете, нам надо знать',
        text: otherDisease,
      },
    ],
  },
]

export default createInfo
