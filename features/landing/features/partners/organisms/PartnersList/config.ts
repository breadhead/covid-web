interface Partner {
  id: string
  type: string
  typeLabel: string
  img: string
  label: string
  sum?: string
}

enum PartnersType {
  Donor = 'donor',
  Corp = 'corp',
  InfoPartner = 'infoPartner',
  InfrastructurePartner = 'infrastructurePartner',
}

enum PartnersLabel {
  Donor = 'Доноры',
  Corp = 'Корпоративные партнёры',
  InfoPartner = 'Информационные партнёры',
  InfrastructurePartner = 'Инфраструктурные партнёры',
}

const partners = [
  {
    id: '10',
    type: PartnersType.InfrastructurePartner,
    typeLabel: PartnersLabel.InfrastructurePartner,
    img: '/static/images/partners/foundation-logo-partner.svg',
    label: 'Фонд профилактика рака',
    description: 'Инициатива и реализация',
    link: 'https://nenaprasno.ru/'
  },
  {
    id: '20',
    type: PartnersType.InfoPartner,
    typeLabel: PartnersLabel.InfoPartner,
    img: '/static/images/partners/vk-logo.svg',
    label: `ВКонтакте`,
    description: 'Информационный партнёр',
    link: 'https://vk.com/'
  },
  {
    id: '30',
    type: PartnersType.InfoPartner,
    typeLabel: PartnersLabel.InfoPartner,
    img: '/static/images/partners/breadhead-logo.svg',
    label: `Студия Breadhead`,
    description: 'Проектирование, IT-разработка',
    link: 'https://breadhead.ru'
  },
  {
    id: '40',
    type: PartnersType.InfoPartner,
    typeLabel: PartnersLabel.InfoPartner,
    img: '/static/images/partners/zenit-logo.svg',
    label: `ФК «Зенит»`,
    description: 'Помощь врачам',
    link: 'https://fc-zenit.ru/'
  },
  {
    id: '50',
    type: PartnersType.InfoPartner,
    typeLabel: PartnersLabel.InfoPartner,
    img: '/static/images/partners/hva-logo.svg',
    label: `Хваловские воды`,
    description: 'Помощь врачам',
    link: 'https://hvalwaters.ru/'
  },
]

const getCurrentPartnersOptions = (currentPartners: Partner[]) => {
  const types = currentPartners.map((partner: Partner) => partner.type)
  const labels = currentPartners.map((partner: Partner) => partner.typeLabel)

  const uniqueTypes = Array.from(new Set(types))
  const uniqueLabels = Array.from(new Set(labels))

  return uniqueTypes.map((type, i) => ({ type, label: uniqueLabels[i] }))
}

const currentPartnersOptions = getCurrentPartnersOptions(partners)

export {
  Partner,
  PartnersType,
  PartnersLabel,
  partners,
  currentPartnersOptions,
  getCurrentPartnersOptions,
}
