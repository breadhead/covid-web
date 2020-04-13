import getConfig from 'next/config';

import { WidgetForm } from '../widgetReducer';
import { FrequencyEnum } from '../formConfig';

const { publicRuntimeConfig } = getConfig();

export const getWidgetData = (formData: WidgetForm) => {
  const { name, surname, email, frequency, target, cost, otherCost } = formData;

  const data = {
    firstname: name,
    lastname: surname,
    email,
  };
  const recurrent = frequency === FrequencyEnum.Monthly;

  if (recurrent) {
    (data as any).cloudPayments = {
      recurrent: { interval: 'Month', period: 1 },
    };
  }

  const amount = !!otherCost ? otherCost : cost;

  return {
    publicId: publicRuntimeConfig.cloudPaymentId,
    description: target,
    amount: Number(amount),
    currency: 'RUB',
    accountId: email,
    data,
  };
};
