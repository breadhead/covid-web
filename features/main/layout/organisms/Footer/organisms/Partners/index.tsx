import * as React from 'react'

import Partner from '../../atoms/Partner'

const partners = [
  {
    id: '1',
    text: 'Системные проекты, которые меняют медицину России к лучшему',
    logo: '',
  },
  {
    id: '2',
    text: 'Просветительский портал о профилактике и лечении онкологических и других заболеваний',
    logo: '',
  },
  {
    id: '3',
    text: 'Система определения показаний к профилактике рака',
    logo: '',
  },
]

const Partners = () => {
  return (
    <React.Fragment>
      {partners.map((partner) => <Partner key={partner.id} text={partner.text} logo={partner.logo} />)}
    </React.Fragment>)
}

export default Partners
