import { Partner } from '@app/src/domain/models/common/Partner';
import * as _ from 'lodash';

enum PartnersType {
  All = 'all',
  Donor = 'donor',
  InfoPartner = 'info',
  InfrastructurePartner = 'infrastructure',
}

enum PartnersLabel {
  All = 'Все',
  Donor = 'Доноры',
  InfoPartner = 'Информационные партнёры',
  InfrastructurePartner = 'Инфраструктурные партнёры',
}

enum PageType {
  Main = 'main',
  Hospitals = 'hospitals',
  Info = 'info',
  Doctors = 'doctors',
}

const getCurrentPartnersOptions = (currentPartners: Partner[]) => {
  const types = currentPartners.map((partner: Partner) => partner.type);

  const uniqueTypes = Array.from(new Set(types));

  const reversedTypes = _.invert(PartnersType);

  return [
    { type: PartnersType.All, label: PartnersLabel.All },
    ...uniqueTypes.map((type, i) => ({
      type,
      label: PartnersLabel[reversedTypes[type]],
    })),
  ];
};

export { PartnersType, PartnersLabel, PageType, getCurrentPartnersOptions };
