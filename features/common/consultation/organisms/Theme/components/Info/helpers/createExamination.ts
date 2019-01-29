import { head } from 'lodash'

import { SituationClaim } from '@app/models/Claim/SituationClaim'

import { InfoBlock } from './types'

const createExamination = ({
  histology,
  discharge,
  otherFiles,
}: SituationClaim): InfoBlock[] => {
  const title = 'Обследования'
  const heading = [
    {
      subtitle: 'Гистология',
      text: histology && histology.url,
    },
    {
      subtitle: 'Заключения и выписки',
      text: discharge && discharge.url,
    },
  ]

  if (head(otherFiles)) {
    return [
      {
        title,
        articles: [
          ...heading,
          ...otherFiles.map(({ title: subtitle, url }) => ({
            subtitle,
            text: url,
          })),
        ],
      },
    ]
  }

  return [
    {
      title,
      articles: heading,
    },
  ]
}

export default createExamination
