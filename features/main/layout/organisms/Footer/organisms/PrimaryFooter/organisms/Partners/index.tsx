import * as React from 'react'

import Partner from '../../atoms/Partner'

import { NON_BREAKING_SPACE } from '@app/lib/config'

const partners = [
  {
    id: '1',
    text: `Системные проекты, которые меняют медицину России к${NON_BREAKING_SPACE}лучшему`,
    logo: 'http://placecorgi.com/136/96',
  },
  {
    id: '2',
    text: `Просветительский портал о${NON_BREAKING_SPACE}профилактике и лечении онкологических и других заболеваний`,
    logo: 'http://placecorgi.com/136/96',
  },
  {
    id: '3',
    text: `Система определения показаний к${NON_BREAKING_SPACE}профилактике рака`,
    logo: 'http://placecorgi.com/136/96',
  },
]

const Partners = () => {
  return (
    <React.Fragment>
      {partners.map((partner) => <Partner key={partner.id} text={partner.text} logo={partner.logo} />)}
    </React.Fragment>)
}

export default Partners
