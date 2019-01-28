import { NON_BREAKING_SPACE } from '@app/lib/config'

export enum PartnersType {
  Donor = 'donor',
  Corp = 'corp',
  InfoPartner = 'infoPartner',
  InfrastructurePartner = 'infrastructurePartner',
}

export const partners = [
  {
    id: '10',
    type: PartnersType.Donor,
    img:
      '/static/images/partners/BF_im_Svyatoj_velikomuchenicy_Anastasii_Uzoreshitelnicy.png',
    label: `БФ им.${NON_BREAKING_SPACE}святой великомученницы Анастасии Узорешительницы`,
    sum: `500${NON_BREAKING_SPACE}000`,
  },
  {
    id: '20',
    type: PartnersType.Donor,
    img: '/static/images/partners/Pravoslavie_i_Mir.png',
    label: `БФ «Православие и${NON_BREAKING_SPACE}мир»`,
    sum: `1${NON_BREAKING_SPACE}000${NON_BREAKING_SPACE}000`,
  },
  {
    id: '30',
    type: PartnersType.InfrastructurePartner,
    img: '/static/images/partners/Holdingoavya_kompaniya_Adamant.png',
    label: 'Холдингоавя компания «Адамант»',
    sum: '2 000 000',
  },
]
