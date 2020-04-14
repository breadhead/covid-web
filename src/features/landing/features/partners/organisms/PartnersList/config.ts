import * as _ from 'lodash';

import { Partner } from '@app/src/domain/models/common/Partner';

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
  Ask = 'ask',
}

const customOptions = [
  { type: PartnersType.Donor, label: PartnersLabel.Donor },
  {
    type: PartnersType.InfrastructurePartner,
    label: PartnersLabel.InfrastructurePartner,
  },
  { type: PartnersType.InfoPartner, label: PartnersLabel.InfoPartner },
];

const defaultOptions = [{ type: PartnersType.All, label: PartnersLabel.All }];

const getCurrentPartnersOptions = (currentPartners: Partner[]) => {
  const types = currentPartners.map((partner: Partner) => partner.type);

  return [
    ...defaultOptions,
    ...customOptions.filter((opt) => types.includes(opt.type)),
  ];
};

export { PartnersType, PartnersLabel, PageType, getCurrentPartnersOptions };
