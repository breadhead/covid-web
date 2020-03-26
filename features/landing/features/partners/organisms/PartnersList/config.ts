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
    img: '/static/images/partners/foundation-logo.svg',
    label: 'Фонд профилактика рака',
    description: 'Инициатива и реализация',
  },
  {
    id: '20',
    type: PartnersType.Donor,
    typeLabel: PartnersLabel.Donor,
    img: '/static/images/partners/breadhead-logo-line.png',
    label: `Студия Breadhead`,
    description: 'Инициатива и реализация',
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
