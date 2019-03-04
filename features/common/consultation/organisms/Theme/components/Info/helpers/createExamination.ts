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
      isUrl: true,
    },
    {
      subtitle: 'Заключения и выписки',
      text: discharge && discharge.url,
      isUrl: true,
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
            isUrl: true,
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
