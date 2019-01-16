import { SituationClaim } from '@app/models/Claim/SituationClaim'

import { InfoBlock } from './types'

const createExamination = ({
  histology,
  discharge,
  otherFiles,
}: SituationClaim): InfoBlock[] => [
  {
    title: 'Обследования',
    articles: [
      {
        subtitle: 'Гистология',
        text: histology && histology.url,
      },
      {
        subtitle: 'Заключения и выписки',
        text: discharge && discharge.url,
      },
      ...otherFiles.map(({ title, url }) => ({
        subtitle: title,
        text: url,
      })),
    ],
  },
]

export default createExamination
