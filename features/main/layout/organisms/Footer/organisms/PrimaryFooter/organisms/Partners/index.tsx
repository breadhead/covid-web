import * as React from 'react'

import Partner from '../../atoms/Partner'

import { NON_BREAKING_SPACE } from '@app/lib/config'

const partners = [
  {
    id: '1',
    text: `Системные проекты, которые меняют медицину России к${NON_BREAKING_SPACE}лучшему`,
    logo: '/static/images/layout/footer/foundation_logo.png',
  },
  {
    id: '2',
    text: `Просветительский портал о${NON_BREAKING_SPACE}профилактике и лечении онкологических и других заболеваний`,
    logo: '/static/images/layout/footer/media_logo.png',
  },
  {
    id: '3',
    text: `Система определения показаний к${NON_BREAKING_SPACE}профилактике рака`,
    logo: '/static/images/layout/footer/screen_logo.png',
  },
]

const Partners = () => (
  <>
    {partners.map(({ id, text, logo }) => (
      <Partner key={id} text={text} logo={logo} />
    ))}
  </>
)

export default Partners
