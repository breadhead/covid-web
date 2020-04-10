import getConfig from 'next/config';

import { WidgetForm } from '../widgetReducer';
import { FrequencyEnum } from '../formConfig';

const { publicRuntimeConfig } = getConfig();

export const getWidgetData = (formData: WidgetForm) => {
  const data = {
    firstname: name,
    lastname: formData.surname,
    email: formData.email,
  };
  const recurrent = formData.frequency === FrequencyEnum.Monthly;

  if (recurrent) {
    (data as any).cloudPayments = {
      recurrent: { interval: 'Month', period: 1 },
    };
  }

  return {
    publicId: publicRuntimeConfig.cloudPaymentId,
    description: formData.target,
    amount: Number(formData.cost),
    currency: 'RUB',
    accountId: formData.email,
    data,
  };
};
