import { NON_BREAKING_SPACE } from '@app/lib/config'

interface Partner {
  id: string
  type: string
  typeLabel: string
  img: string
  label: string
  sum: string
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
    type: PartnersType.Donor,
    typeLabel: PartnersLabel.Donor,
    img:
      '/static/images/partners/BF_im_Svyatoj_velikomuchenicy_Anastasii_Uzoreshitelnicy.png',
    label: `БФ им.${NON_BREAKING_SPACE}святой великомученницы Анастасии Узорешительницы`,
    sum: `500${NON_BREAKING_SPACE}000`,
  },
  {
    id: '20',
    type: PartnersType.InfrastructurePartner,
    typeLabel: PartnersLabel.InfrastructurePartner,
    img: '/static/images/partners/Holdingoavya_kompaniya_Adamant.png',
    label: 'Холдинговая компания «Адамант»',
    sum: '2 000 000',
  },
  {
    id: '30',
    type: PartnersType.Donor,
    typeLabel: PartnersLabel.Donor,
    img: '/static/images/partners/Pravoslavie_i_Mir.png',
    label: `БФ «Православие и${NON_BREAKING_SPACE}мир»`,
    sum: `1${NON_BREAKING_SPACE}000${NON_BREAKING_SPACE}000`,
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
