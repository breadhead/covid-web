import { PageType } from '@app/src/features/landing/features/partners/organisms/PartnersList/config';

export enum FrequencyEnum {
  Monthly = 'monthly',
  Once = 'once',
}

export const frequencyForm = [
  {
    id: FrequencyEnum.Monthly,
    value: FrequencyEnum.Monthly,
    name: 'frequency',
    label: 'Помогать ежемесячно',
    checked: true,
    size: 1,
  },
  {
    id: FrequencyEnum.Once,
    value: FrequencyEnum.Once,
    name: 'frequency',
    label: 'Разово',
    checked: false,
    size: 1,
  },
];

export const costForm = [
  {
    id: '100',
    value: '100',
    name: 'cost',
    label: '100 ₽',
    size: 1,
    checked: false,
  },
  {
    id: '300',
    value: '300',
    name: 'cost',
    label: '300 ₽',
    size: 1,
    checked: false,
  },
  {
    id: '500',
    value: '500',
    name: 'cost',
    label: '500 ₽',
    size: 1,
    checked: true,
  },
  {
    id: '1000',
    value: '1000',
    name: 'cost',
    label: '1 000 ₽',
    size: 1,
    checked: false,
  },
  {
    id: '2000',
    value: '2000',
    name: 'cost',
    label: '2 000 ₽',
    size: 1,
    checked: false,
  },
  {
    id: '5000',
    value: '5000',
    name: 'cost',
    label: '5 000 ₽',
    size: 1,
    checked: false,
  },
  {
    id: '10000',
    value: '10000',
    name: 'cost',
    label: '10 000 ₽',
    size: 1,
    checked: false,
  },
  {
    id: 'other',
    value: 'other',
    name: 'cost',
    label: 'Другая сумма',
    size: 2,
    checked: false,
  },
];

const targetSelectOptions = [
  {
    value: PageType.Hospitals,
    label: 'Помощь больницам',
  },
  {
    value: PageType.Ask,
    label: 'Справочная служба',
  },
  {
    value: PageType.Doctors,
    label: 'Обучение врачей',
  },
];

export const getTargetSelect = (pageType: PageType) => {
  return {
    label: 'Назначение:',
    name: 'target',
    options: targetSelectOptions.map((opt) => ({
      ...opt,
      selected: pageType === opt.value,
    })),
  };
};
