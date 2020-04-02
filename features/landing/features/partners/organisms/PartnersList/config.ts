import { Partner } from '@app/models/sanity/Partner';

enum PartnersType {
  Donor = 'donor',
  Corp = 'corp',
  InfoPartner = 'info',
  InfrastructurePartner = 'infrastructure',
}

enum PartnersLabel {
  Donor = 'Доноры',
  Corp = 'Корпоративные партнёры',
  InfoPartner = 'Информационные партнёры',
  InfrastructurePartner = 'Инфраструктурные партнёры',
}

enum PageType {
  Main = 'main',
  Partners = 'partners',
}

const getCurrentPartnersOptions = (currentPartners: Partner[]) => {
  const types = currentPartners.map((partner: Partner) => partner.type);

  const uniqueTypes = Array.from(new Set(types));
  const uniqueLabels = Array.from(new Set(types));

  return uniqueTypes.map((type, i) => ({ type, label: uniqueLabels[i] }));
};

export { PartnersType, PartnersLabel, PageType, getCurrentPartnersOptions };
