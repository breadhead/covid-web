import { SituationClaim } from '@app/models/Claim/SituationClaim'

import { InfoBlock } from './types'

const createInfo = ({
  description,
  diagnosis,
  stage,
  otherDisease,
  relativesDiseases,
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
      {
        subtitle: 'Кровные родстенники, которые болели раком',
        children: (relativesDiseases || []).map(
          ({ relative, diagnosisAge, localization }) => ({
            subtitle: relative,
            children: [
              {
                subtitle: 'Локализация опухоли',
                text: localization,
              },
              {
                subtitle: 'Возраст, в котором был установлен диагноз',
                text: diagnosisAge,
              },
            ],
          }),
        ),
      },
    ],
  },
]

export default createInfo
